const Planet = require("../models/Planet");
const Satellite = require("../models/Satellite");

module.exports = {
   async createSatellite(req, res) {
      const { planetId } = req.params;
      const { name, serial_number } = req.body;

      const planet = await Planet.findByPk(planetId);

      if (!planet) {
         return res.send("This planet doesn't exists.");
      }

      const satellite = await Satellite.create({ name, serial_number, planetId });
      return res.json(satellite);
   },

   async getSatellites(req, res) {
      const planetId = await req.params.planetId;

      if (!planetId) {
         return res.send("This planet doesn't exists.");
      }

      const planet = await Planet.findByPk(planetId, {
         include: Satellite,
      });

      return res.json(planet);
   },
};
