const fs = require('fs');
const axios = require('axios');

const main = async () => {
  const traitsDir = './characters_traits'
  const metadataDir = './characters_metadata';
  if (!fs.existsSync(metadataDir)) {
    fs.mkdirSync(metadataDir);
  }

  for (let idx = 0; idx<100; idx++) {
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
      image: `ipfs://QmQdHek9auPTYGk5z9b1mgnkcZWP79dRYsDjpLpXHYXbA4/${idx}.png`,
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
