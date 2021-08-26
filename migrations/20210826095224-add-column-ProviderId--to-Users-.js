'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn(
      'Users',
      'ProviderId',
      {
        allowNull: true,
        type: Sequelize.INTEGER,
        references : {
          model: 'Providers',
          key: 'id'
        },
        onUpdate : 'cascade',
        onDelete : 'cascade'
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeColumn('Users', 'ProviderId' )
  }
};
