const JMToken= artifacts.require("JMToken");
const MapleNFT= artifacts.require("MapleNFT");
const MapleMarket= artifacts.require("MapleMarket");
const MapleItems = artifacts.require("MapleItems");

module.exports = function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(MapleMarket);
    await deployer.deploy(JMToken, "JoyfulMaplestory", "JMT");
    await deployer.deploy(
      MapleNFT,
      MapleMarket.address,
      JMToken.address,
      "https://ipfs.io/ipfs/QmVrTbBgFA36MW3KFArybwEZfFA99QwQWRExUc9n1D6ixM/" // 예시
    );
    await deployer.deploy(
      MapleItems,
      MapleMarket.address,
      JMToken.address,);
  })
};
