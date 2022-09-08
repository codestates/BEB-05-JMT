const fs = require('fs');
const https = require('https');

const save = (metadata, item, idx, imageDir, traitsDir) => {
    const imageFilename = `${imageDir}/${idx}.png`
    const file = fs.createWriteStream(imageFilename);

    const uri = `https://maplestory.io/api/${metadata.region}/${metadata.version}/item/${item.itemId}/icon?resize=3`
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
      fs.writeFile(traitsFilename, JSON.stringify(item.itemId), function(err) {
        if (err) {
            console.log(err);
        } else {
          console.log(`Saved ${traitsFilename} Completed`);
        }
      });
}

const main = async () => {
  const rawdata = fs.readFileSync('./item_metadata.json');
  const metadata = JSON.parse(rawdata);

  const imageDir = './items_image';
  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir);
  }
  const traitsDir = './items_traits';
  if (!fs.existsSync(traitsDir)) {
    fs.mkdirSync(traitsDir);
  }

  const items = metadata.items;

  for (const idx in items.sword) {
    const item = items.sword[idx];
    save(metadata, item, idx,  imageDir, traitsDir);
  }

  for (const idx in items.bow) {
    const item = items.bow[idx];
    save(metadata, item, parseInt(idx)+100, imageDir, traitsDir);
  }

  for (const idx in items.staff) {
    const item = items.staff[idx];
    save(metadata, item, parseInt(idx)+200, imageDir, traitsDir);    
  }


  for (const idx in items.polearm) {
    const item = items.polearm[idx];
    save(metadata, item, parseInt(idx)+300, imageDir, traitsDir);
  }


  for (const idx in items.scroll) {
    const item = items.scroll[idx];
    save(metadata, item, parseInt(idx)+400, imageDir, traitsDir);
  } 
}

main();
