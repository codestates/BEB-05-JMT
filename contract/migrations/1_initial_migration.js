const JMToken= artifacts.require("JMToken");
const MapleNFT= artifacts.require("MapleNFT");
const MapleMarket= artifacts.require("MapleMarket");

module.exports = function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(MapleMarket);
    await deployer.deploy(JMToken, "JoyfulMaplestory", "JMT");
    await deployer.deploy(
      MapleNFT,
      MapleMarket.address,
      JMToken.address,
      "https://ipfs.io/ipfs/QmPMc4tcBsMqLRuCQtPmPe84bpSjrC3Ky7t3JWuHXYB4aS/" // 예시
    );
  })
};
