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


module.exports = async function (deployer) {

  const deployFunc = async (deployer, web3, contributeAccount) => {
    deployer.from = contributeAccount;
    await deployer.then(async () => {
      let jmtCont,lpCont,lptCont,routerCont,mapleNFTCont,mapleItemsCont,vjmtCont,stakingCont;

      //jmt deploy
      await deployer.deploy(jonMatangContract, contributeAccount, {from: contributeAccount});
      jmtCont = await jonMatangContract.deployed();

      //vjmt deploy
      await deployer.deploy(vJmtokenContract, contributeAccount, {from: contributeAccount});
      vjmtCont = await vJmtokenContract.deployed();
  
      //staking deploy
      await deployer.deploy(stakingContract, vjmtCont.address, {from: contributeAccount});
      stakingCont = await stakingContract.deployed();
  
      await deployer.deploy(
        mapleMarket, 
        jonMatangContract.address,
        contributeAccount,
        {from: contributeAccount}
      );
      mapleMarketCont = await mapleMarket.deployed();
  
      await deployer.deploy(
        mapleNFT,
        mapleMarketCont.address,
        jonMatangContract.address,
        "https://ipfs.io/ipfs/Qmb9C6BQg3CXYkDG3yeHGvStHMxjVxUdpK6mWiMCwz6WM8/", // 예시
        contributeAccount,
        {from: contributeAccount}
      );
      await deployer.deploy(
        mapleItems,
        mapleMarketCont.address,
        jonMatangContract.address,
        contributeAccount,
        {from: contributeAccount}
      );
      //Maple NFT contract instance 
      mapleNFTCont = await mapleNFT.deployed();
      mapleItemsCont = await mapleItems.deployed();
  
      // swap_pool
      await deployer.deploy(lpContract, {from: contributeAccount}); // lp 디플로이
      lpCont = await lpContract.deployed(); 
  
      await deployer.deploy(lptContract,lpCont.address, {from: contributeAccount}) // lpt 디플로이 
      lptCont = await lptContract.deployed();
  
      // address setting
      await lpCont.setJmtCoinAddress(jmtCont.address);
      await lpCont.setLPTAddress(lptCont.address);
      await lpCont.setVJMTCoinAddress(vjmtCont.address);
  
      await deployer.deploy(routerContract,
          lpCont.address,
          jmtCont.address,
          {from: contributeAccount}
      );
  
      await deployer.deploy(mapleFight, {from: contributeAccount}); // 전투 컨트랙트
  
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
      await jmtCont.contribute({ 
          from: contributeAccount,
          value: web3.utils.toWei("1","ether") 
      });
      await jmtCont.claimTokens({
          from: contributeAccount
      });
      await jmtCont.sendLiquidityToLPContract(lpCont.address);
    })
  }

  const Web3 = require('web3');
  const fs = require('fs');
  const web3 = new Web3();
  const HDWalletProvider = require('@truffle/hdwallet-provider');
  const mnemonic = fs.readFileSync(".secret").toString().trim();
  const walletMnemonic = mnemonic;
  const networkId = deployer.network;

  if (networkId == "development") {
    web3.setProvider(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
    const accounts = await web3.eth.getAccounts();
    await deployFunc(deployer, web3, accounts[0]);

  } else if (networkId == "polygon_local") {
    const walletAPIUrl = 'http://127.0.0.1:10002/'
    const provider = new HDWalletProvider(
      walletMnemonic,
      walletAPIUrl
    );
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    deployFunc(deployer, web3, accounts[0]);

  } else if (networkId == "polygon_mumbai") {
    const walletAPIUrl = "https://polygon-mumbai.g.alchemy.com/v2/GLfsnBEH_aJxS2vlKQD1laFR1MP34AAI";
    const provider = new HDWalletProvider(
      walletMnemonic,
      walletAPIUrl
    );
    const web3 = new Web3(provider);
    deployFunc(deployer, web3, "0x43112976696C2Cbc1dc89B8f805Fa3Db136898Ec");

  } else if (networkId == "polygon_mainnet") {
    const walletAPIUrl = "https://polygon-mainnet.g.alchemy.com/v2/s6X3a36jtbvH1aXYzd1HXPSdX9FapzEC";
    const provider = new HDWalletProvider(
      walletMnemonic,
      walletAPIUrl
    );
    const web3 = new Web3(provider);
    deployFunc(deployer, web3, "0x43112976696C2Cbc1dc89B8f805Fa3Db136898Ec");

  }
};
