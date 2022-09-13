const ContractOwner = '0x525a7F5BF1341aEA1A7b129496549a495929bCB4' //오너,가나슈(index[1])

var lpContract = artifacts.require('../contracts/LiquidityPool.sol');
var jonMatangContract = artifacts.require('../contracts/JonMatang.sol');
var lptContract = artifacts.require('../contracts/LPT.sol');
var router = artifacts.require('../contracts/JMTRouter.sol');

module.exports = async function(deployer) {
    let jmtCont,lpCont,lptCont,routerCont;
    await deployer.deploy(jonMatangContract,ContractOwner); // JMT 디플로이 
    jmtCont = await jonMatangContract.deployed();

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
    
    // await routerCont._getAddress().then((value)=>{
    //     console.log(value)
    // });

};