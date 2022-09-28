'use strict';
module.exports = (sequelize, DataTypes) => {
  const WeaponMeta = sequelize.define('WeaponMeta', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    tokenId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    itemId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stand: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fight: {
      type: DataTypes.STRING,
      allowNull: true
    },
    strength: {
      type: DataTypes.STRING,
      allowNull: true
    },
    successRate: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    charset: "utf8",
    collate: "utf8_general_ci", // 한글 저장
    freezeTableName: true
  });
  WeaponMeta.associate = (db) => {};
  return WeaponMeta;
};
