const fs = require('fs');
const https = require('https');

const main = async () => {
  const rawdata = fs.readFileSync('./charactor_metadata.json');
  const metadata = JSON.parse(rawdata);
  console.log(metadata);

  let cnt = 0;

  for (let skin of metadata.skin) {
    for (let face of metadata.face) {
      for (let hair of metadata.hair) {
        for (let clothes of metadata.clothes) {
          for (let shoes of metadata.shoes) {
            const filename = `${cnt}.png`
            const file = fs.createWriteStream(filename);

            const uri = "".concat(...[
              'https://maplestory.io/api/character/',
              encodeURIComponent(`{"itemId":1${skin},"region":"KMS","version":"${metadata.version}"},`),
              encodeURIComponent(`{"itemId":${skin},"region":"KMS","version":"${metadata.version}"},`),
              encodeURIComponent(`{"itemId":${face},"region":"KMS","version":"${metadata.version}"},`),
              encodeURIComponent(`{"itemId":${hair},"region":"KMS","version":"${metadata.version}"},`),
              encodeURIComponent(`{"itemId":${clothes},"region":"KMS","version":"${metadata.version}"},`),
              encodeURIComponent(`{"itemId":${shoes},"region":"KMS","version":"${metadata.version}"}`),
              '/stand1/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0',
            ]);
            console.log(uri);
            
            cnt++;

            const request = https.get(
              // encodeURI('https://maplestory.io/api/character/{"itemId":2015,"version":"235"},{"itemId":12000,"version":"235"}/stand1/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0'),
              uri,
              (response) => {
                response.pipe(file);
          
                file.on("finish", () => {
                  file.close();
                  console.log(`Download ${filename} Completed`);
                });
              }
            );
          }
        }
      }
    }
  }
}

main();
