const ContractOwner = '0x61aDA980c7D8a6Ef5113aA51919d89b1FD4f6669' //오너,가나슈(index[0])
const MapleNFT= artifacts.require("MapleNFT");
const MapleMarket= artifacts.require("MapleMarket");
const MapleItems = artifacts.require("MapleItems");

const lpContract = artifacts.require('../contracts/LiquidityPool.sol');
const jonMatangContract = artifacts.require('../contracts/JMToken.sol');
const lptContract = artifacts.require('../contracts/LPT.sol');
const router = artifacts.require('../contracts/JMTRouter.sol');

//테스트
const Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new Web3.providers.HttpProvider('http://127.0.0.1:7545')); //테스트시 본인 가나치 포트에 맞추세요

module.exports = async function (deployer) {

  deployer.then(async () => {
      // NFTorMarket
    let jmtCont,lpCont,lptCont,routerCont,mapleNFTCont,mapleItemsCont;
    await deployer.deploy(jonMatangContract, ContractOwner);
    jmtCont = await jonMatangContract.deployed();

    await deployer.deploy(MapleMarket);
    await deployer.deploy(
      MapleNFT,
      MapleMarket.address,
      jonMatangContract.address,
      "https://ipfs.io/ipfs/QmVrTbBgFA36MW3KFArybwEZfFA99QwQWRExUc9n1D6ixM/", // 예시
      ContractOwner 
    );
    await deployer.deploy(
      MapleItems,
      MapleMarket.address,
      jonMatangContract.address,
      ContractOwner
    );    
    //Maple NFT contract instance 
    mapleNFTCont = await MapleNFT.deployed();
    mapleItemsCont = await MapleItems.deployed();

    // swap_pool
    await deployer.deploy(lpContract); // lp 디플로이
    lpCont = await lpContract.deployed(); 

    await deployer.deploy(lptContract,lpCont.address) // lpt 디플로이 
    lptCont = await lptContract.deployed();

    // address setting
    await lpCont.setJmtCoinAddress(jmtCont.address)
    await lpCont.setLPTAddress(lptCont.address)

    await deployer.deploy(router,
        lpCont.address,
        jmtCont.address
    );

    routerCont = await router.deployed();
    await jmtCont.setRouterAddress(routerCont.address);
    await jmtCont.setMapleNFTAddress(mapleNFTCont.address);
    await jmtCont.setMapleItemsAddress(mapleItemsCont.address);

    // 테스트용 토큰 자동 에어드랍
    const accounts = await web3.eth.getAccounts();
    await jmtCont.contribute({ 
        from: accounts[1],
        value: web3.utils.toWei("1","ether") 
    });
    await jmtCont.claimTokens({
        from: accounts[1]
    });
    await jmtCont.sendLiquidityToLPContract(lpCont.address);


  })


  // await routerCont._getAddress().then((value)=>{
  //     console.log(value)
  // });
  
};
