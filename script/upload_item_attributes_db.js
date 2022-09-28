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
  const traitsDir = './items_traits';
  const files = fs.readdirSync(traitsDir);
  for (let idx = 0; idx<files.length; idx++) {
    const rawdata = fs.readFileSync(traitsDir + '/' + files[idx]);
    const traits = JSON.parse(rawdata);
    const sql = `
      INSERT INTO WeaponMeta(tokenId, itemId, type, stand, fight, strength, successRate, createdAt, updatedAt)
      VALUE(
        "${files[idx].replace('.json', '')}",
        "${traits["itemId"]}",
        "${traits["type"]}",
        "${traits["stand"] || ''}",
        "${traits["fight"] || ''}",
        "${traits["strength"] || ''}",
        "${traits["successRate"] || ''}",
        NOW(),
        NOW()
      );
    `
    const [ result ] = await conn.query(sql)
    console.log(result);
  }
};

main();
