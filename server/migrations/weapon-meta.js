'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('WeaponMeta', {
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
      itemId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stand: {
        type: Sequelize.STRING,
        allowNull: true
      },
      fight: {
        type: Sequelize.STRING,
        allowNull: true
      },
      strength: {
        type: Sequelize.STRING,
        allowNull: true
      },
      successRate: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable('WeaponMeta');
  }
};
