
##Install GO lang

sudo apt-get remove golang
sudo apt autoremove
wget https://dl.google.com/go/go1.9.7.linux-amd64.tar.gz
tar -C /usr/local -xzf go1.9.7.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin


mkdir -p ~/go/src/github.com/Yocoin15/
rm -rf ~/go/src/github.com/Yocoin15/Yocoin_Sources
git clone https://github.com/Yocoin15/Yocoin_Sources.git -b v2.0 ~/go/src/github.com/Yocoin15/Yocoin_Sources
export GOPATH=~/go

cd ~/go/src/github.com/Yocoin15/Yocoin_Sources


##Build .yocoin binary

go build -o yocoin cmd/yocoin/*.go


./yocoin  --maxpeers 20 console



## COMMANDS

##first, run

yocoin account new

##to list accounts:

yocoin account list

##then run

yocoin console

personal.unlockAccount("account_address")
##, you may also use
personal.unlockAccount(eth.accounts[0])
##, or also specify password
personal.unlockAccount("account_address", "password", 300)
##where 300 is timeout in seconds to keep account unlocked
##sending:
eth.sendTransaction({from:eth.accounts[0], to:"0x5adc90e0637eb8bf0f5022611214ee500afae06d", value:"17590519640"});
##get balance in 1/1000000000 YOCs:

web3.fromWei(eth.getBalance(eth.coinbase), "gwei")

##also you can do

miner.start()

##to run rpc methods

##run
yocoin --rpc

##then do queries like in ethereum:

curl -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1} http://127.0.0.1:8545'
