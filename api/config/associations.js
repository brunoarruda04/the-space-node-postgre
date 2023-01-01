const Planet = require("../models/Planet");
const Satellite = require("../models/Satellite");

const Captain = require("../models/Captain");
const Spaceship = require("../models/Spaceship");

Planet.hasMany(Satellite, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Satellite.belongsTo(Planet, { foreignKey: "planetId", as: "planet" });
Captain.belongsTo(Planet, { foreignKey: "from_planet", as: "planet" });

Captain.belongsToMany(Spaceship, { foreignKey: "captainId", through: "captains_spaceships", as: "spaceships" });
Spaceship.belongsToMany(Captain, { foreignKey: "spaceshipId", through: "captains_spaceships", as: "captains" });

module.exports = { Planet, Satellite, Captain, Spaceship };
