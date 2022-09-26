'use strict';
module.exports = (sequelize, DataTypes) => {
  const CharacterMeta = sequelize.define('CharacterMeta', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    tokenId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    skin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    face: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hair: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clothes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shoes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eyeDecoration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    faceAccessory: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    charset: "utf8",
    collate: "utf8_general_ci", // 한글 저장
    freezeTableName: true
  });
  CharacterMeta.associate = (db) => {};
  return CharacterMeta;
};
