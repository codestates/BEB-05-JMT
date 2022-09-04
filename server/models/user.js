'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false  
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    charset: "utf8",
    collate: "utf8_general_ci", // 한글 저장
    freezeTableName: true
  });
  User.associate = (db) => {
  }
  return User;
};