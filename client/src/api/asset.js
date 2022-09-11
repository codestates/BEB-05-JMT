import axios from "axios";

const fetchAttributes = (attributes) => {
  const result = {};
  for(let item of attributes){
    result[item.trait_type] = item.value;
  }
  return result;
}

const fetchCharImage = async (charAttr, motion) => {
  const version ='367';
  const character = fetchAttributes(charAttr); 

  const uri = "".concat(...[
    'https://maplestory.io/api/character/',
    (character.skin && character.skin != 'none') ? encodeURIComponent(`{"itemId":1${character.skin},"region":"KMS","version":"${version}"},`) : "",
    (character.skin && character.skin != 'none') ? encodeURIComponent(`{"itemId":${character.skin},"region":"KMS","version":"${version}"},`) : "",
    (character.face && character.face != 'none') ? encodeURIComponent(`{"itemId":${character.face},"region":"KMS","version":"${version}"},`) : "",
    (character.hair && character.hair != 'none') ? encodeURIComponent(`{"itemId":${character.hair},"region":"KMS","version":"${version}"},`) : "",
    (character.clothes && character.clothes != 'none') ? encodeURIComponent(`{"itemId":${character.clothes},"region":"KMS","version":"${version}"},`) : "",
    (character.shoes && character.shoes != 'none') ? encodeURIComponent(`{"itemId":${character.shoes},"region":"KMS","version":"${version}"},`) : "",
    (character.eyeDecoration && character.eyeDecoration != 'none') ? encodeURIComponent(`{"itemId":${character.eyeDecoration},"region":"KMS","version":"${version}"},`) : "",
    (character.faceAccessory && character.faceAccessory != 'none') ? encodeURIComponent(`{"itemId":${character.faceAccessory},"region":"KMS","version":"${version}"}`) : "",
    `/stand1/${motion}?showears=false&showLefEars=false&showHighLefEars=undefined&resize=4&name=&flipX=false&bgColor=0,0,0,0`,
  ]);

  return uri;
}

const fetchWeaponImage = async (weaponAttr) => {
  const version ='367';
  const weapon = fetchAttributes(weaponAttr);

  const uri = "".concat(...[
    'https://maplestory.io/api/character/',
    encodeURIComponent(`{"itemId":2000,"version":"234","alpha":0},{"itemId":12000,"version":"234","alpha":0},`),
    (weapon.itemId != 'none') ? encodeURIComponent(`{"itemId":${weapon.itemId},"region":"KMS","version":"${version}"}`) : "",
    `/jump/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=4&name=&flipX=true&bgColor=0,0,0,0`,
  ]);
  return uri;
}


const fetchStandImage = async (charAttr, weaponAttr, motion) =>{
  const version ='367';
  const character = fetchAttributes(charAttr); 
  const weapon = fetchAttributes(weaponAttr);

  const uri = "".concat(...[
    'https://maplestory.io/api/character/',
    (character.skin && character.skin != 'none') ? encodeURIComponent(`{"itemId":1${character.skin},"region":"KMS","version":"${version}"},`) : "",
    (character.skin && character.skin != 'none') ? encodeURIComponent(`{"itemId":${character.skin},"region":"KMS","version":"${version}"},`) : "",
    (character.face && character.face != 'none') ? encodeURIComponent(`{"itemId":${character.face},"region":"KMS","version":"${version}"},`) : "",
    (character.hair && character.hair != 'none') ? encodeURIComponent(`{"itemId":${character.hair},"region":"KMS","version":"${version}"},`) : "",
    (character.clothes && character.clothes != 'none') ? encodeURIComponent(`{"itemId":${character.clothes},"region":"KMS","version":"${version}"},`) : "",
    (character.shoes && character.shoes != 'none') ? encodeURIComponent(`{"itemId":${character.shoes},"region":"KMS","version":"${version}"},`) : "",
    (character.eyeDecoration && character.eyeDecoration != 'none') ? encodeURIComponent(`{"itemId":${character.eyeDecoration},"region":"KMS","version":"${version}"},`) : "",
    (character.faceAccessory && character.faceAccessory != 'none') ? encodeURIComponent(`{"itemId":${character.faceAccessory},"region":"KMS","version":"${version}"}`) : "",
    (weapon.itemId != 'none') ? encodeURIComponent(`{"itemId":${weapon.itemId},"region":"KMS","version":"${version}"}`) : "",
    `/${weapon.stand}/${motion}?showears=false&showLefEars=false&showHighLefEars=undefined&resize=4&name=&flipX=false&bgColor=0,0,0,0`,
  ]);

  return uri;
}

const fetchFightImage = async (charAttr, weaponAttr, motion) =>{
  const version ='367';
  const character = fetchAttributes(charAttr); 
  const weapon = fetchAttributes(weaponAttr);

  const uri = "".concat(...[
    'https://maplestory.io/api/character/',
    (character.skin && character.skin != 'none') ? encodeURIComponent(`{"itemId":1${character.skin},"region":"KMS","version":"${version}"},`) : "",
    (character.skin && character.skin != 'none') ? encodeURIComponent(`{"itemId":${character.skin},"region":"KMS","version":"${version}"},`) : "",
    encodeURIComponent(`{"itemId":25050,"animationName":"angry","region":"KMS","version":"${version}"},`),
    (character.hair && character.hair != 'none') ? encodeURIComponent(`{"itemId":${character.hair},"region":"KMS","version":"${version}"},`) : "",
    (character.clothes && character.clothes != 'none') ? encodeURIComponent(`{"itemId":${character.clothes},"region":"KMS","version":"${version}"},`) : "",
    (character.shoes && character.shoes != 'none') ? encodeURIComponent(`{"itemId":${character.shoes},"region":"KMS","version":"${version}"},`) : "",
    (character.eyeDecoration && character.eyeDecoration != 'none') ? encodeURIComponent(`{"itemId":${character.eyeDecoration},"region":"KMS","version":"${version}"},`) : "",
    (character.faceAccessory && character.faceAccessory != 'none') ? encodeURIComponent(`{"itemId":${character.faceAccessory},"region":"KMS","version":"${version}"}`) : "",
    (weapon.itemId != 'none') ? encodeURIComponent(`{"itemId":${weapon.itemId},"region":"KMS","version":"${version}"}`) : "",
    `/${weapon.fight}/${motion}?showears=false&showLefEars=false&showHighLefEars=undefined&resize=4&name=&flipX=false&bgColor=0,0,0,0`,
  ]);

  return uri;
}

//fetchWinImage
//fetchLoseImage
const assetAPI = {
  fetchAttributes,
  fetchCharImage,
  fetchWeaponImage,
  fetchStandImage,
  fetchFightImage
};

export default assetAPI;
