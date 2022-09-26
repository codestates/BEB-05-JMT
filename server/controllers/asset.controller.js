const {CharacterMeta} = require('../models');

const characterMetadata = async(req, res, next) => {
  const token = await CharacterMeta.findOne({
    where: {
      tokenId: req.params.tokenId
    }
  });
  let attributes = [];
  for(const [key, value] of Object.entries(token.dataValues)) {
    if (value == "none" || key == "id" || key == "createdAt" || key == "updatedAt" || key == "tokenId") {
      continue;
    }
    attributes.push({
      "trait_type": key,
      "value": value
    });
  }
  if(token){
    const uri = "".concat(...[
      'https://maplestory.io/api/character/',
      (token.dataValues.skin != 'none') ? encodeURIComponent(`{"itemId":1${token.dataValues.skin},"region":"KMS","version":"367"},`) : "",
      (token.dataValues.skin != 'none') ? encodeURIComponent(`{"itemId":${token.dataValues.skin},"region":"KMS","version":"367"},`) : "",
      (token.dataValues.face != 'none') ? encodeURIComponent(`{"itemId":${token.dataValues.face},"region":"KMS","version":"367"},`) : "",
      (token.dataValues.hair != 'none') ? encodeURIComponent(`{"itemId":${token.dataValues.hair},"region":"KMS","version":"367"},`) : "",
      (token.dataValues.clothes != 'none') ? encodeURIComponent(`{"itemId":${token.dataValues.clothes},"region":"KMS","version":"367"},`) : "",
      (token.dataValues.shoes != 'none') ? encodeURIComponent(`{"itemId":${token.dataValues.shoes},"region":"KMS","version":"367"},`) : "",
      (token.dataValues.eyeDecoration != 'none') ? encodeURIComponent(`{"itemId":${token.dataValues.eyeDecoration},"region":"KMS","version":"367"},`) : "",
      (token.dataValues.faceAccessory != 'none') ? encodeURIComponent(`{"itemId":${token.dataValues.faceAccessory},"region":"KMS","version":"367"}`) : "",
      '/stand1/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=4&name=&flipX=false&bgColor=0,0,0,0',
    ]);
    res.status(200).json({
      image: uri,
      name: `Maple #${token.tokenId}`,
      description: "CODESTATES BEB05 Project5 https://github.com/codestates/BEB-05-JMT",
      attributes: attributes
    })
  }else{
    res.status(200).json({
      message: "false"
    })
  }
}

module.exports = {
  characterMetadata
};
