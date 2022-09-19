const dotenv = require('dotenv');
dotenv.config();

const development = {
  username: "root",
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: "jmt",
  host: "127.0.0.1",
  dialect: "mysql",
  port: process/env.MYSQL_PORT
};

module.exports = { development };

