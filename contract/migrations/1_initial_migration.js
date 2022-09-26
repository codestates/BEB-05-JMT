const ContractOwner = '0x43112976696C2Cbc1dc89B8f805Fa3Db136898Ec' //오너,가나슈(index[0])
const mapleNFT= artifacts.require("MapleNFT");
const mapleMarket= artifacts.require("MapleMarket");
const mapleItems = artifacts.require("MapleItems");
const mapleFight = artifacts.require("MapleFight");

const lpContract = artifacts.require('../contracts/LiquidityPool.sol');
const jonMatangContract = artifacts.require('../contracts/JMToken.sol');
const lptContract = artifacts.require('../contracts/LPT.sol');
const routerContract = artifacts.require('../contracts/JMTRouter.sol');

const stakingContract = artifacts.require('../contracts/Staking.sol');
const vJmtokenContract = artifacts.require('../contracts/VJMToken.sol');

//ganache
// const Web3 = require('web3');
// const web3 = new Web3();
// web3.setProvider(new Web3.providers.HttpProvider('http://127.0.0.1:7545')); //테스트시 본인 가나치 포트에 맞추세요 10002

// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const Web3 = require('web3');
// const fs = require('fs');
// const mnemonic = fs.readFileSync("../.secret").toString().trim();
// const maticAPIKey = fs.readFileSync("../.secret.apikey").toString().trim();
// const walletMnemonic = mnemonic; // Your mnemonic
// //polygon local
// // const walletAPIUrl = 'http://127.0.0.1:10002/'; // Your Infura URL
// //polygon mumbai
// const walletAPIUrl = `wss://rpc-mumbai.maticvigil.com/ws/v1/11e54611899cb7b5e8ca8e065baace37e7029595`;
// const provider = new HDWalletProvider(
//     walletMnemonic,
//     walletAPIUrl
// );
// const web3 = new Web3(provider);

module.exports = async function (deployer) {
  // const testacc = await web3.eth.getAccounts();
  // console.log(testacc[0]);

  deployer.then(async () => {
    let jmtCont,lpCont,lptCont,routerCont,mapleNFTCont,mapleItemsCont,vjmtCont,stakingCont;

    //jmt deploy
    await deployer.deploy(jonMatangContract, ContractOwner);
    jmtCont = await jonMatangContract.deployed();
    
    //vjmt deploy
    await deployer.deploy(vJmtokenContract, ContractOwner);
    vjmtCont = await vJmtokenContract.deployed();

    //staking deploy
    await deployer.deploy(stakingContract, vjmtCont.address);
    stakingCont = await stakingContract.deployed();

    await deployer.deploy(
      mapleMarket, 
      jonMatangContract.address,
      ContractOwner
    );
    mapleMarketCont = await mapleMarket.deployed();


    await deployer.deploy(
      mapleNFT,
      mapleMarketCont.address,
      jonMatangContract.address,
      "https://ipfs.io/ipfs/Qmb9C6BQg3CXYkDG3yeHGvStHMxjVxUdpK6mWiMCwz6WM8/", // 예시
      ContractOwner
    );
    await deployer.deploy(
      mapleItems,
      mapleMarketCont.address,
      jonMatangContract.address,
      ContractOwner
    );
    //Maple NFT contract instance 
    mapleNFTCont = await mapleNFT.deployed();
    mapleItemsCont = await mapleItems.deployed();
    await mapleNFTCont.generateMintArray();
    await mapleItemsCont.generateWeaponArray();
    await mapleItemsCont.generatefirstWeapon();
    await mapleItemsCont.generateItemCheck();
    await mapleItemsCont.generateScrollArray();

    // swap_pool
    await deployer.deploy(lpContract); // lp 디플로이
    lpCont = await lpContract.deployed(); 

    await deployer.deploy(lptContract,lpCont.address) // lpt 디플로이 
    lptCont = await lptContract.deployed();

    // address setting
    await lpCont.setJmtCoinAddress(jmtCont.address);
    await lpCont.setLPTAddress(lptCont.address);
    await lpCont.setVJMTCoinAddress(vjmtCont.address);

    await deployer.deploy(routerContract,
        lpCont.address,
        jmtCont.address
    );

    await deployer.deploy(mapleFight); // 전투 컨트랙트

    routerCont = await routerContract.deployed();
    await jmtCont.setRouterAddress(routerCont.address);
    await jmtCont.setMapleNFTAddress(mapleNFTCont.address);
    await jmtCont.setMapleItemsAddress(mapleItemsCont.address);
    await jmtCont.setMapleMarketAddress(mapleMarketCont.address);
    await jmtCont.setStakingAddress(stakingCont.address);
    await stakingCont.setJMTokenAddress(jmtCont.address);
    await vjmtCont.setLPAddress(lpCont.address); // lp어드레스 추가 
    await vjmtCont.MoveToTreasuryWallet(); // lp,재무 지갑 자산 이동

    // Contribute
    // const accounts = await web3.eth.getAccounts();
    await jmtCont.contribute({ 
        from: "0x43112976696C2Cbc1dc89B8f805Fa3Db136898Ec",
        value: Web3.utils.toWei("0.1","ether") 
    });
    await jmtCont.claimTokens({
        from: "0x43112976696C2Cbc1dc89B8f805Fa3Db136898Ec"
    });
    await jmtCont.sendLiquidityToLPContract(lpCont.address);
  })

  // await routerCont._getAddress().then((value)=>{
  //     console.log(value)
  // });  
};
