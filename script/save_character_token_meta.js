const fs = require('fs');
const axios = require('axios');

// const skinNames = {
//   "2000": "Light",
//   "2004": "Ashen",
//   "2011": "Clay",
//   "2012": "Mercedes",
//   "2015": "Soft Petal",
//   "2019": "라벤더 홍조"
// }

const main = async () => {
  const traitsDir = './characters_traits'
  const metadataDir = './characters_metadata';
  if (!fs.existsSync(metadataDir)) {
    fs.mkdirSync(metadataDir);
  }

  for (let idx = 0; idx<5000; idx++) {
    const rawdata = fs.readFileSync(`${traitsDir}/${idx}.json`);
    const traits = JSON.parse(rawdata);

    let attributes = []
    for(const [key, value] of Object.entries(traits)) {
      if (value == "none") {
        continue;
      }
      let name = value;
      // if (key != "skin") {
      //   const response = await axios.get(`https://maplestory.io/api/KMS/367/item/${value}/name`);
      //   name = response.data.name;
      // } else {
      //   name = skinNames[value]
      // }
      attributes.push({
        "trait_type": key,
        "value": name
      })
    }

    metadata = {
      image: `ipfs://QmexmVtwMtc4bp2sg33hmuNLc5YPp96thfFSxW14Pz19fX/${idx}.png`,
      name: `Maple #${idx}`,
      description: "CODESTATES BEB05 Project5 https://github.com/codestates/BEB-05-JMT",
      attributes: attributes
    }

    console.log(metadata)
    const metadataFilename = `${metadataDir}/${idx}`
    fs.writeFile(metadataFilename, JSON.stringify(metadata), function(err) {
      if (err) {
          console.log(err);
      } else {
        console.log(`Saved ${metadataFilename} Completed`);
      }
    });
  }
}

main();
