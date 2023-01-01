const Planet = require("../models/Planet");

module.exports = {
   async getPlanets(req, res) {
      const planets = await Planet.findAll();
      return res.json(planets);
   },

   async getPlanetById(req, res) {
      const planet = await Planet.findOne({
         where: {
            id: req.params.id,
         },
      });
      return res.json(planet);
   },

   async createPlanet(req, res) {
      const { name, position } = req.body;
      const planet = await Planet.create({ name, position });
      return res.json(planet);
   },

   async updatePlanet(req, res) {
      const { name, size, position } = req.body;
      await Planet.update(
         { name, size, position },
         {
            where: {
               id: req.params.id,
            },
         }
      );
      return res.json("Planet updated successfully.");
   },

   async deletePlanet(req, res) {
      await Planet.destroy({
         where: {
            id: req.params.id,
         },
      });
      return res.send("Planet removed succesfully");
   },
};
