// Authored and revised by YOC team, 2017-2018
// License placeholder #1

package yochash

import (
	"io/ioutil"
	"math/big"
	"math/rand"
	"os"
	"sync"
	"testing"
	"time"

	"github.com/Yocoin15/Yocoin_Sources/common"
	"github.com/Yocoin15/Yocoin_Sources/common/hexutil"
	"github.com/Yocoin15/Yocoin_Sources/core/types"
)

// Tests that yochash works correctly in test mode.
func TestTestMode(t *testing.T) {
	head := &types.Header{Number: big.NewInt(1), Difficulty: big.NewInt(100)}

	yochash := NewTester()
	defer yochash.Close()
	block, err := yochash.Seal(nil, types.NewBlockWithHeader(head), nil)
	if err != nil {
		t.Fatalf("failed to seal block: %v", err)
	}
	head.Nonce = types.EncodeNonce(block.Nonce())
	head.MixDigest = block.MixDigest()
	if err := yochash.VerifySeal(nil, head); err != nil {
		t.Fatalf("unexpected verification error: %v", err)
	}
}

// This test checks that cache lru logic doesn't crash under load.
// It reproduces https://github.com/yocoin/go-yocoin/issues/14943
func TestCacheFileEvict(t *testing.T) {
	tmpdir, err := ioutil.TempDir("", "yochash-test")
	if err != nil {
		t.Fatal(err)
	}
	defer os.RemoveAll(tmpdir)
	e := New(Config{CachesInMem: 3, CachesOnDisk: 10, CacheDir: tmpdir, PowMode: ModeTest})
	defer e.Close()

	workers := 8
	epochs := 100
	var wg sync.WaitGroup
	wg.Add(workers)
	for i := 0; i < workers; i++ {
		go verifyTest(&wg, e, i, epochs)
	}
	wg.Wait()
}

func verifyTest(wg *sync.WaitGroup, e *Yochash, workerIndex, epochs int) {
	defer wg.Done()

	const wiggle = 4 * epochLength
	r := rand.New(rand.NewSource(int64(workerIndex)))
	for epoch := 0; epoch < epochs; epoch++ {
		block := int64(epoch)*epochLength - wiggle/2 + r.Int63n(wiggle)
		if block < 0 {
			block = 0
		}
		head := &types.Header{Number: big.NewInt(block), Difficulty: big.NewInt(100)}
		e.VerifySeal(nil, head)
	}
}

func TestRemoteSealer(t *testing.T) {
	yochash := NewTester()
	defer yochash.Close()
	api := &API{yochash}
	if _, err := api.GetWork(); err != errNoMiningWork {
		t.Error("expect to return an error indicate there is no mining work")
	}

	head := &types.Header{Number: big.NewInt(1), Difficulty: big.NewInt(100)}
	block := types.NewBlockWithHeader(head)

	// Push new work.
	yochash.Seal(nil, block, nil)

	var (
		work [3]string
		err  error
	)
	if work, err = api.GetWork(); err != nil || work[0] != block.HashNoNonce().Hex() {
		t.Error("expect to return a mining work has same hash")
	}

	if res := api.SubmitWork(types.BlockNonce{}, block.HashNoNonce(), common.Hash{}); res {
		t.Error("expect to return false when submit a fake solution")
	}

	// Push new block with same block number to replace the original one.
	head = &types.Header{Number: big.NewInt(1), Difficulty: big.NewInt(1000)}
	block = types.NewBlockWithHeader(head)
	yochash.Seal(nil, block, nil)

	if work, err = api.GetWork(); err != nil || work[0] != block.HashNoNonce().Hex() {
		t.Error("expect to return the latest pushed work")
	}

	// Push block with higher block number.
	newHead := &types.Header{Number: big.NewInt(2), Difficulty: big.NewInt(100)}
	newBlock := types.NewBlockWithHeader(newHead)
	yochash.Seal(nil, newBlock, nil)

	if res := api.SubmitWork(types.BlockNonce{}, block.HashNoNonce(), common.Hash{}); res {
		t.Error("expect to return false when submit a stale solution")
	}
}

func TestHashRate(t *testing.T) {
	var (
		yochash  = NewTester()
		api      = &API{yochash}
		hashrate = []hexutil.Uint64{100, 200, 300}
		expect   uint64
		ids      = []common.Hash{common.HexToHash("a"), common.HexToHash("b"), common.HexToHash("c")}
	)

	defer yochash.Close()

	if tot := yochash.Hashrate(); tot != 0 {
		t.Error("expect the result should be zero")
	}

	for i := 0; i < len(hashrate); i += 1 {
		if res := api.SubmitHashRate(hashrate[i], ids[i]); !res {
			t.Error("remote miner submit hashrate failed")
		}
		expect += uint64(hashrate[i])
	}
	if tot := yochash.Hashrate(); tot != float64(expect) {
		t.Error("expect total hashrate should be same")
	}
}

func TestClosedRemoteSealer(t *testing.T) {
	yochash := NewTester()
	// Make sure exit channel has been listened
	time.Sleep(1 * time.Second)
	yochash.Close()

	api := &API{yochash}
	if _, err := api.GetWork(); err != errYochashStopped {
		t.Error("expect to return an error to indicate yochash is stopped")
	}

	if res := api.SubmitHashRate(hexutil.Uint64(100), common.HexToHash("a")); res {
		t.Error("expect to return false when submit hashrate to a stopped yochash")
	}
}
