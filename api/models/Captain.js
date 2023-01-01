const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Captain = sequelize.define("captains", {
   name: DataTypes.STRING,
   from_planet: DataTypes.INTEGER,
});

module.exports = Captain;
