'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('CharacterMeta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tokenId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      skin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      face: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hair: {
        type: Sequelize.STRING,
        allowNull: false
      },
      clothes: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shoes: {
        type: Sequelize.STRING,
        allowNull: false
      },
      eyeDecoration: {
        type: Sequelize.STRING,
        allowNull: false
      },
      faceAccessory: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CharacterMeta');
  }
};
