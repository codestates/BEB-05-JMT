import axios from "axios";
const {version} = require('../global_variables');

const fetchAttributes = (attributes) => {
  const result = {};
  for(let item of attributes){
    result[item.trait_type] = item.value;
  }
  return result;
}

const fetchStrength = (weaponAttr) => {
  const weapon = fetchAttributes(weaponAttr);

  return weapon.strength;
}

const fetchCharName = async (charAttr) =>{
  const character = fetchAttributes(charAttr);

  const skinNames = {
  "2000": "밝은 피부",
  "2004": "잿빛 피부",
  "2011": "태닝 피부",
  "2012": "메르세데스",
  "2015": "연한 꽃잎",
  "2019": "라벤더 홍조"
  }

  let attributes = {};
  for(const [key, value] of Object.entries(character)) {
    if (value == "none") {
      continue;
    }
    let name = value;
    if (key != "skin") {
      const response = await axios.get(`https://maplestory.io/api/KMS/367/item/${value}/name`);
      name = response.data.name;
    } else {
      name = skinNames[value]
    }
    attributes[`${key}`] = name;
  }
  return attributes;
}

const fetchWeaponName = async (weaponAttr)=> {
  const weapon = fetchAttributes(weaponAttr);
  const itemId = weapon.itemId;

  const response = await axios.get(`https://maplestory.io/api/KMS/367/item/${itemId}/name`);
  const name = response.data.name;
  return name;
}

const fetchCharImage = async (charAttr, motion) => {
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
    (character.faceAccessory && character.faceAccessory != 'none') ? encodeURIComponent(`{"itemId":${character.faceAccessory},"region":"KMS","version":"${version}"},`) : "",
    (weapon.itemId != 'none') ? encodeURIComponent(`{"itemId":${weapon.itemId},"region":"KMS","version":"${version}"}`) : "",
    `/${weapon.stand}/${motion}?showears=false&showLefEars=false&showHighLefEars=undefined&resize=4&name=&flipX=false&bgColor=0,0,0,0`,
  ]);

  return uri;
}

const fetchFightImage = async (charAttr, weaponAttr, motion) =>{
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
    (character.faceAccessory && character.faceAccessory != 'none') ? encodeURIComponent(`{"itemId":${character.faceAccessory},"region":"KMS","version":"${version}"},`) : "",
    (weapon.itemId != 'none') ? encodeURIComponent(`{"itemId":${weapon.itemId},"region":"KMS","version":"${version}"}`) : "",
    `/${weapon.fight}/${motion}?showears=false&showLefEars=false&showHighLefEars=undefined&resize=4&name=&flipX=false&bgColor=0,0,0,0`,
  ]);

  return uri;
}

const fetchWalkImage = async (charAttr, weaponAttr, motion) =>{
  const character = fetchAttributes(charAttr); 
  const weapon = fetchAttributes(weaponAttr);
  let walk = 'walk1';

  if(weapon.stand=='stand2'){
    walk = 'walk2';
  }

  const uri = "".concat(...[
    'https://maplestory.io/api/character/',
    (character.skin && character.skin != 'none') ? encodeURIComponent(`{"itemId":1${character.skin},"region":"KMS","version":"${version}"},`) : "",
    (character.skin && character.skin != 'none') ? encodeURIComponent(`{"itemId":${character.skin},"region":"KMS","version":"${version}"},`) : "",
    (character.face && character.face != 'none') ? encodeURIComponent(`{"itemId":${character.face},"region":"KMS","version":"${version}"},`) : "",
    (character.hair && character.hair != 'none') ? encodeURIComponent(`{"itemId":${character.hair},"region":"KMS","version":"${version}"},`) : "",
    (character.clothes && character.clothes != 'none') ? encodeURIComponent(`{"itemId":${character.clothes},"region":"KMS","version":"${version}"},`) : "",
    (character.shoes && character.shoes != 'none') ? encodeURIComponent(`{"itemId":${character.shoes},"region":"KMS","version":"${version}"},`) : "",
    (character.eyeDecoration && character.eyeDecoration != 'none') ? encodeURIComponent(`{"itemId":${character.eyeDecoration},"region":"KMS","version":"${version}"},`) : "",
    (character.faceAccessory && character.faceAccessory != 'none') ? encodeURIComponent(`{"itemId":${character.faceAccessory},"region":"KMS","version":"${version}"},`) : "",
    (weapon.itemId != 'none') ? encodeURIComponent(`{"itemId":${weapon.itemId},"region":"KMS","version":"${version}"}`) : "",
    `/${walk}/${motion}?showears=false&showLefEars=false&showHighLefEars=undefined&resize=4&name=&flipX=false&bgColor=0,0,0,0`,
  ]);

  return uri;
}

const fetchWinImage = async (charAttr, weaponAttr, motion) =>{
  const character = fetchAttributes(charAttr); 
  const weapon = fetchAttributes(weaponAttr);

  const uri = "".concat(...[
    'https://maplestory.io/api/character/',
    (character.skin && character.skin != 'none') ? encodeURIComponent(`{"itemId":1${character.skin},"region":"KMS","version":"${version}"},`) : "",
    (character.skin && character.skin != 'none') ? encodeURIComponent(`{"itemId":${character.skin},"region":"KMS","version":"${version}"},`) : "",
    encodeURIComponent(`{"itemId":25050,"animationName":"smile","region":"KMS","version":"${version}"},`),
    (character.hair && character.hair != 'none') ? encodeURIComponent(`{"itemId":${character.hair},"region":"KMS","version":"${version}"},`) : "",
    (character.clothes && character.clothes != 'none') ? encodeURIComponent(`{"itemId":${character.clothes},"region":"KMS","version":"${version}"},`) : "",
    (character.shoes && character.shoes != 'none') ? encodeURIComponent(`{"itemId":${character.shoes},"region":"KMS","version":"${version}"},`) : "",
    (character.eyeDecoration && character.eyeDecoration != 'none') ? encodeURIComponent(`{"itemId":${character.eyeDecoration},"region":"KMS","version":"${version}"},`) : "",
    (character.faceAccessory && character.faceAccessory != 'none') ? encodeURIComponent(`{"itemId":${character.faceAccessory},"region":"KMS","version":"${version}"},`) : "",
    (weapon.itemId != 'none') ? encodeURIComponent(`{"itemId":${weapon.itemId},"region":"KMS","version":"${version}"}`) : "",
    `/${weapon.stand}/${motion}?showears=false&showLefEars=false&showHighLefEars=undefined&resize=4&name=&flipX=false&bgColor=0,0,0,0`,
  ]);

  return uri;
}

const fetchLoseImage = async (charAttr, weaponAttr, motion) =>{
  const character = fetchAttributes(charAttr); 
  const weapon = fetchAttributes(weaponAttr);
  
  const uri = "".concat(...[
    'https://maplestory.io/api/character/',
    (character.skin && character.skin != 'none') ? encodeURIComponent(`{"itemId":1${character.skin},"region":"KMS","version":"${version}"},`) : "",
    (character.skin && character.skin != 'none') ? encodeURIComponent(`{"itemId":${character.skin},"region":"KMS","version":"${version}"},`) : "",
    encodeURIComponent(`{"itemId":25050,"animationName":"cry","region":"KMS","version":"${version}"},`),
    (character.hair && character.hair != 'none') ? encodeURIComponent(`{"itemId":${character.hair},"region":"KMS","version":"${version}"},`) : "",
    (character.clothes && character.clothes != 'none') ? encodeURIComponent(`{"itemId":${character.clothes},"region":"KMS","version":"${version}"},`) : "",
    (character.shoes && character.shoes != 'none') ? encodeURIComponent(`{"itemId":${character.shoes},"region":"KMS","version":"${version}"},`) : "",
    (character.eyeDecoration && character.eyeDecoration != 'none') ? encodeURIComponent(`{"itemId":${character.eyeDecoration},"region":"KMS","version":"${version}"},`) : "",
    (character.faceAccessory && character.faceAccessory != 'none') ? encodeURIComponent(`{"itemId":${character.faceAccessory},"region":"KMS","version":"${version}"},`) : "",
    (weapon.itemId != 'none') ? encodeURIComponent(`{"itemId":${weapon.itemId},"region":"KMS","version":"${version}"}`) : "",
    `/${weapon.stand}/${motion}?showears=false&showLefEars=false&showHighLefEars=undefined&resize=4&name=&flipX=false&bgColor=0,0,0,0`,
  ]);
 
  return uri;
}


const metadataAPI = {
  fetchAttributes,
  fetchCharImage,
  fetchWeaponImage,
  fetchStandImage,
  fetchFightImage,
  fetchWinImage,
  fetchLoseImage,
  fetchStrength,
  fetchWalkImage,
  fetchWeaponName,
  fetchCharName
};

export default metadataAPI;
