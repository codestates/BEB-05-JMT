const dotenv = require('dotenv');
dotenv.config();

const development = {
  username: "root",
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: "jmt",
  host: '127:3306',
  dialect: "mysql"
};

module.exports = { development };

