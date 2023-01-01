const Captain = require("../models/Captain");
const Planet = require("../models/Planet");

module.exports = {
   async createCaptain(req, res) {
      const { name, from_planet } = req.body;

      const planet = await Planet.findByPk(from_planet);

      if (!planet) {
         const from_planet = null;
         const captain = await Captain.create({ name, from_planet });
         return res.json(captain);
      } else {
         const captain = await Captain.create({ name, from_planet });
         return res.json(captain);
      }
   },

   async getCaptains(req, res) {
      const captain = await Captain.findAll();

      return res.json(captain);
   },

   async getCaptainById(req, res) {
      const captain = await Captain.findByPk(req.params);
   },
};
