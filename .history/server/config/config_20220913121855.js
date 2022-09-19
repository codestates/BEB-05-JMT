const dotenv = require('dotenv');
dotenv.config();

const development = {
  username: "root",
  password: "root",
  database: "jmt",
  host: "127.0.0.1",
  dialect: "mysql"
};
console.log(process.env.MYSQL_ROOT_PASSWORD)
module.exports = { development };

