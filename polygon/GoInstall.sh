GO_VERSION=1.17.1

curl -LO https://dl.google.com/go/go${GO_VERSION}.linux-amd64.tar.gz
rm -rf /usr/local/go && tar -C /usr/local -xzf go${GO_VERSION}.linux-amd64.tar.gz

cat ~/.profile | grep /usr/local/go/bin || echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.profile
cat ~/.profile | grep GOPATH= || echo 'export GOPATH=$(go env GOPATH)' >> ~/.profile
cat ~/.profile | grep GOPATH/bin || echo 'export PATH=$PATH:$GOPATH/bin' >> ~/.profile
source ~/.profile

echo $GOPATH
go version
