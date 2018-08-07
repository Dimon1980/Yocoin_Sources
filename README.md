# YoCoin


## Building

Golang 1.9+ required.
    
    add-apt-repository ppa:gophers/archive
    apt update
    apt install golang-1.9-go

Then

    mkdir -p ~/go/src/github.com/Yocoin15/
    rm -rf ~/go/src/github.com/Yocoin15/Yocoin_Sources
    git clone github.com:Kubemake/yocoin.git -b develop ~/go/src/github.com/Yocoin15/Yocoin_Sources
    export GOPATH=~/go

    cd ~/go/src/github.com/Yocoin15/Yocoin_Sources

    go build -o ./yocoin cmd/yocoin/*.go

### Building bundled JS

    cd internal/jsre/deps/
    go get -u github.com/jteeuwen/go-bindata/...
    go generate

(GOPATH must include ~/go/bin for go-bindata tool to be available)

Hint: preprocess .js first with https://closure-compiler.appspot.com/ ("whitespace only" _ "pretty print")

### Building debian package

Tnis approach is using debian/ template - not build/ci.go script (which was used to generate the template)

    sudo apt install devscripts debhelper dh-systemd
    dpkg-buildpackage

Your production system should have GPG key for "YoCoin Builds <yocoin@yocoin.org>"

## Starting node and testnet

Create new account(-s)

     ./yocoin account new

Create **genesis.json** file from **genesis.exaple.json** and add new account to **"alloc"** block

Initialize private net:

    ./yocoin init genesis.json

Run new node with console mode
 
    build/bin/yoc --maxpeers 0 --networkid 13 --port "30301" --rpc --rpccorsdomain "*" console

Check mining base address (console)

    > yoc.coinbase

Start mining to generate DAG (console)

    > miner.start()

## Working with node

First, run

    ./yocoin account new

To list accounts:

    ./yocoin account list

Console mode:

    ./yocoin console

Unlock your account (console):

    > personal.unlockAccount("account_address")

With default account (console):

    > personal.unlockAccount(yoc.accounts[0])

With password and unlock timeout (console):

    > personal.unlockAccount("account_address", "password", 300)

Sending (console, value in 1/1000000000 YOCs):

     > yoc.sendTransaction({from:yoc.accounts[0], to:"0x5adc90e0637eb8bf0f5022611214ee500afae06d", value:"17590519640"});

Getting balance:

    > web3.fromWei(yoc.getBalance(yoc.coinbase), "gwei")

## Node RPC


to run rpc methods, use --rpc:

    ./yocoin --rpc

then do queries like in go-ethereum:

    curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"yoc_accounts","params":[],"id":1} http://127.0.0.1:8545'

Starting testnet node accessible from outside and able to communicate with more nodes than on fixed list (--discover):

    ./yocoin --networkid 7357 --rpccorsdomain "*" --rpc --rpcport 8545 --rpcaddr "0.0.0.0" --discover console

Limiting exposed APIs:

    ./yocoin --rpcapi yoc,web3,net,personal --rpc --rpcport "8546" --rpcaddr "0.0.0.0" --rpccorsdomain "*"
 
Get balance:

    curl -s -H "Content-Type: application/json" -X POST --data '{"jsonrpc":"2.0", "method":"yoc_getBalance", "params":["0x5adc90e0637eb8bf0f5022611214ee500afae06d", "latest"], "id":1}' http://localhost:8545

Send transaction:

    curl -s -H "Content-Type: application/json" -X POST --data '{"jsonrpc":"2.0", "method":"yoc_sendTransaction", "params":[{"from": "0x5adc90e0637eb8bf0f5022611214ee500afae06d", "to": "0x5adc90e0637eb8bf0f5022611214ee500afae06d", "value": "0x0"}], "id":1}' http://localhost:8545

Note that "value" is in hex. 

## More cURL examples


### Create account, unlock it and send from it

Create new account (with password):

    curl -k -s -H "Content-Type: application/json" -X POST --data '{"jsonrpc":"2.0", "method":"personal_newAccount", "params":["password111lol"],"id":1}' http://localhost:8545

Expected output is account address:

    {"jsonrpc":"2.0","id":1,"result":"0xa042d63e84d2fa86fc4f8aa69832cf3eca3d94a0"}

Now unlock this account so it can be used:

    curl -k -s -H "Content-Type: application/json" -X POST --data '{"jsonrpc":"2.0", "method":"personal_unlockAccount", "params": ["0xa042d63e84d2fa86fc4f8aa69832cf3eca3d94a0", "password111lol", 3000], "id": 1}'

Expected output is confirmation:

    {"jsonrpc":"2.0","id":1,"result":true}
   

Sending coins (when you get some on the account):

    curl -s -H "Content-Type: application/json" -X POST --data '{"jsonrpc":"2.0", "method":"yoc_sendTransaction", "params":[{"from": "0xa042d63e84d2fa86fc4f8aa69832cf3eca3d94a0", "to": "0xa042d63e84d2fa86fc4f8aa69832cf3eca3d94a0", "value": "0x5F5E100"}], "id":4}' http://localhost:8545

Value is in gwei (1/1000000000 YOC), and is HEX-encoded. (For reference, 0.1 YOC is 0x5F5E100)
