const ContractOwner = '0x525a7F5BF1341aEA1A7b129496549a495929bCB4' //오너,가나슈(index[0])
const MapleNFT= artifacts.require("MapleNFT");
const MapleMarket= artifacts.require("MapleMarket");
const MapleItems = artifacts.require("MapleItems");

const lpContract = artifacts.require('../contracts/LiquidityPool.sol');
const jonMatangContract = artifacts.require('../contracts/JMToken.sol');
const lptContract = artifacts.require('../contracts/LPT.sol');
const router = artifacts.require('../contracts/JMTRouter.sol');

module.exports = async function (deployer) {

  deployer.then(async () => {
      // NFTorMarket
    let jmtCont,lpCont,lptCont,routerCont;
    await deployer.deploy(jonMatangContract, ContractOwner);
    jmtCont = await jonMatangContract.deployed();

    await deployer.deploy(MapleMarket);
    await deployer.deploy(
      MapleNFT,
      MapleMarket.address,
      jonMatangContract.address,
      "https://ipfs.io/ipfs/QmVrTbBgFA36MW3KFArybwEZfFA99QwQWRExUc9n1D6ixM/" // 예시
    );
    await deployer.deploy(
      MapleItems,
      MapleMarket.address,
      jonMatangContract.address,
    );    
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
  })
  // await routerCont._getAddress().then((value)=>{
  //     console.log(value)
  // });
  
};
