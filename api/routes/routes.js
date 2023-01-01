const express = require("express");
const routes = express.Router();

const PlanetController = require("../controllers/PlanetController");
const SatelliteController = require("../controllers/SatelliteController");
const CaptainController = require("../controllers/CaptainController");
const SpaceshipController = require("../controllers/SpaceshipController");

// Planets Routes
routes.get("/planets", PlanetController.getPlanets);
routes.get("/planets/:id", PlanetController.getPlanetById);
routes.post("/planets", PlanetController.createPlanet);
routes.put("/planets/:id", PlanetController.updatePlanet);
routes.delete("/planets/:id", PlanetController.deletePlanet);

// Satellites Routes
routes.get("/planets/:planetId/satellites", SatelliteController.getSatellites);
routes.post("/planets/:planetId/satellites", SatelliteController.createSatellite);

// Captain Routes
routes.get("/captains", CaptainController.getCaptains);
routes.post("/captains", CaptainController.createCaptain);

// Spaceship Routes
routes.get("/captains/:captainId/spaceships", SpaceshipController.getSpaceships);
routes.post("/captains/:captainId/spaceships", SpaceshipController.createSpaceship);

module.exports = routes;
