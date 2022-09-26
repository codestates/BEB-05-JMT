const mysql = require('mysql2/promise');
const fs = require('fs');

const main = async () => {
  const conn = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "jmt",
    connectTimeout: 5000,
    connectionLimit: 30
  });
  const traitsDir = './characters_traits';
  for (let idx = 0; idx<5000; idx++) {
    const rawdata = fs.readFileSync(`${traitsDir}/${idx}.json`);
    const traits = JSON.parse(rawdata);
    const sql = `
      INSERT INTO CharacterMeta(tokenId, skin, face, hair, clothes, shoes, eyeDecoration, faceAccessory, createdAt, updatedAt)
      VALUE(
        "${idx}",
        "${traits["skin"]}",
        "${traits["face"]}",
        "${traits["hair"]}",
        "${traits["clothes"]}",
        "${traits["shoes"]}",
        "${traits["eyeDecoration"]}",
        "${traits["faceAccessory"]}",
        NOW(),
        NOW()
      );
    `
    const [ result ] = await conn.query(sql)
    console.log(result);
  }
};

main();
