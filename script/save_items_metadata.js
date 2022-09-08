const fs = require('fs');
const path = require('path');
const EXTENSION = '.json';

const main = async () => {
  const traitsDir = './items_traits'
  const metadataDir = './items_metadata';
  if (!fs.existsSync(metadataDir)) {
    fs.mkdirSync(metadataDir);
  }
  const files = fs.readdirSync(traitsDir);
  const targetFiles = files.filter(file => {
    return path.extname(file).toLowerCase() === EXTENSION;
  })
  const items = targetFiles.map(name => {
    return path.basename(name, EXTENSION);
  })
  console.log(items);
  for (let idx of items) {
    const rawdata = fs.readFileSync(`${traitsDir}/${idx}.json`);
    const traits = JSON.parse(rawdata);

    let attributes = []
    for(const [key, value] of Object.entries(traits)) {
      if (value == "none") {
        continue;
      }

      attributes.push({
        "trait_type": key,
        "value": value
      })
    }


    metadata = {
      image: `ipfs://QmRKNWffD6AKqvsG2rdkUKeQSPXtfo1Mgo5AkswRVYRMHk/${idx}.png`,
      name: `Maple Item #${idx}`,
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
