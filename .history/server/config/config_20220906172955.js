const dotenv = require('dotenv');
dotenv.config();

const development = {
  username: "root",
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: "jmt",
  host: 'localhost',
  dialect: "mysql",
  port:"3306"
};

module.exports = { development };

