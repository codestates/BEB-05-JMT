const dotenv = require('dotenv');
dotenv.config();

const development = {
  username: "root",
  password: "1234",
  database: "jmt",
  host: "127.0.0.1",
  dialect: "mysql"
};
console.log(process.env.MYSQL_ROOT_PASSWORD)
module.exports = { development };

