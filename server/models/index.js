const Sequelize = require('sequelize');
const User = require('./user');
const CharacterMeta = require('./character.meta');
const WeaponMeta = require('./weapon.meta');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

// new Sequelize를 통해 MYSQL 연결 객체를 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config);


// 연결된 객체 나중에 재사용 하기위해 db.sequelize에 넣기
db.sequelize = sequelize;
db.User = User(sequelize, Sequelize.DataTypes);
db.CharacterMeta = CharacterMeta(sequelize, Sequelize.DataTypes);
db.WeaponMeta = WeaponMeta(sequelize, Sequelize.DataTypes);

module.exports = db;
