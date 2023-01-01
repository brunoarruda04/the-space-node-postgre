"use strict";

module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("captains", {
         id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
         },

         name: {
            type: Sequelize.STRING,
            allowNull: false,
         },

         from_planet: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: { model: "planets", key: "id" },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
         },

         createdAt: {
            type: Sequelize.DATE,
         },

         updatedAt: {
            type: Sequelize.DATE,
         },
      });
   },

   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("captains");
   },
};
