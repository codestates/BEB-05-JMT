const fs = require('fs');
const https = require('https');

const randomElement = (list) => {
  const _random = Math.floor(Math.random() * list.length);
  return list[_random];
}

const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

const draw = (
  exists,
  skinPool,
  facePool,
  hairPool,
  clothesPool,
  shoesPool,
  eyeDecorationPool,
  faceAccessoryPool
) => {
  const skin = randomElement(skinPool);
  const face = randomElement(facePool);
  const hair = randomElement(hairPool);
  const clothes = randomElement(clothesPool);
  const shoes = randomElement(shoesPool);
  const eyeDecoration = randomElement(eyeDecorationPool);
  const faceAccessory = randomElement(faceAccessoryPool);
  const key = `${skin}:${face}:${hair}:${clothes}:${shoes}:${eyeDecoration}:${faceAccessory}`;
  if (key in exists) {
    return draw(
      exists,
      skinPool,
      facePool,
      hairPool,
      clothesPool,
      shoesPool,
      eyeDecorationPool,
      faceAccessoryPool
    )
  }
  exists[key] = true;
  return {
    skin: skin,
    face: face,
    hair: hair,
    clothes: clothes,
    shoes: shoes,
    eyeDecoration: eyeDecoration,
    faceAccessory: faceAccessory,
  }
}

const main = async () => {
  const rawdata = fs.readFileSync('./charactor_metadata.json');
  const metadata = JSON.parse(rawdata);

  const imageDir = './characters_image';
  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir);
  }
  const traitsDir = './characters_traits';
  if (!fs.existsSync(traitsDir)) {
    fs.mkdirSync(traitsDir);
  }

  let exists = {};

  let skinPool = [];
  let facePool = [];
  let hairPool = [];
  let clothesPool = [];
  let shoesPool = [];
  let eyeDecorationPool = [];
  let faceAccessoryPool = [];

  // json 파일에서 각 trait의 rairity의 합은 동일해야합니다.
  for (let item of metadata.traits.skin) {
    skinPool = skinPool.concat(Array(item.rarity).fill(item.itemId));
  }
  for (let item of metadata.traits.face) {
    facePool = facePool.concat(Array(item.rarity).fill(item.itemId));
  }
  for (let item of metadata.traits.hair) {
    hairPool = hairPool.concat(Array(item.rarity).fill(item.itemId));
  }
  for (let item of metadata.traits.clothes) {
    clothesPool = clothesPool.concat(Array(item.rarity).fill(item.itemId));
  }
  for (let item of metadata.traits.shoes) {
    shoesPool = shoesPool.concat(Array(item.rarity).fill(item.itemId));
  }
  for (let item of metadata.traits.eye_decoration) {
    eyeDecorationPool = eyeDecorationPool.concat(Array(item.rarity).fill(item.itemId));
  }
  for (let item of metadata.traits.face_accessory) {
    faceAccessoryPool = faceAccessoryPool.concat(Array(item.rarity).fill(item.itemId));
  }

  skinPool = shuffle(skinPool);
  facePool = shuffle(facePool);
  hairPool = shuffle(hairPool);
  clothesPool = shuffle(clothesPool);
  shoesPool = shuffle(shoesPool);
  eyeDecorationPool = shuffle(eyeDecorationPool);
  faceAccessoryPool = shuffle(faceAccessoryPool);

  let metadataList = [];
  for (let i=0;i<skinPool.length;i++) {
    const drawResult = draw(
      exists,
      skinPool,
      facePool,
      hairPool,
      clothesPool,
      shoesPool,
      eyeDecorationPool,
      faceAccessoryPool
    );
    metadataList.push(drawResult)
  }

  for (const idx in metadataList) {
    const picked = metadataList[idx];

    // save image file
    const imageFilename = `${imageDir}/${idx}.png`
    const file = fs.createWriteStream(imageFilename);

    const uri = "".concat(...[
      'https://maplestory.io/api/character/',
      (picked.skin != 'none') ? encodeURIComponent(`{"itemId":1${picked.skin},"region":"KMS","version":"${metadata.version}"},`) : "",
      (picked.skin != 'none') ? encodeURIComponent(`{"itemId":${picked.skin},"region":"KMS","version":"${metadata.version}"},`) : "",
      (picked.face != 'none') ? encodeURIComponent(`{"itemId":${picked.face},"region":"KMS","version":"${metadata.version}"},`) : "",
      (picked.hair != 'none') ? encodeURIComponent(`{"itemId":${picked.hair},"region":"KMS","version":"${metadata.version}"},`) : "",
      (picked.clothes != 'none') ? encodeURIComponent(`{"itemId":${picked.clothes},"region":"KMS","version":"${metadata.version}"},`) : "",
      (picked.shoes != 'none') ? encodeURIComponent(`{"itemId":${picked.shoes},"region":"KMS","version":"${metadata.version}"},`) : "",
      (picked.eyeDecoration != 'none') ? encodeURIComponent(`{"itemId":${picked.eyeDecoration},"region":"KMS","version":"${metadata.version}"},`) : "",
      (picked.faceAccessory != 'none') ? encodeURIComponent(`{"itemId":${picked.faceAccessory},"region":"KMS","version":"${metadata.version}"}`) : "",
      '/stand1/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=4&name=&flipX=false&bgColor=0,0,0,0',
    ]);
    console.log(uri);

    const request = https.get(
      uri,
      (response) => {
        response.pipe(file);
  
        file.on("finish", () => {
          file.close();
          console.log(`Download ${imageFilename} Completed`);
        });
      }
    );

    // save traits file
    const traitsFilename = `${traitsDir}/${idx}.json`
    fs.writeFile(traitsFilename, JSON.stringify(picked), function(err) {
      if (err) {
          console.log(err);
      } else {
        console.log(`Saved ${traitsFilename} Completed`);
      }
    });
  }
}

main();
