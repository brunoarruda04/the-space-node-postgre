const Captain = require("../models/Captain");
const Spaceship = require("../models/Spaceship");

module.exports = {
   async createSpaceship(req, res) {
      const { captainId } = req.params;
      const { name, capacity } = req.body;

      const captain = await Captain.findByPk(captainId);

      if (!captain) {
         return res.send("This captain doesn't exists.");
      }

      const [spaceships] = await Spaceship.findOrCreate({
         where: { name, capacity },
      });

      await captain.addSpaceship(spaceships);
      return res.json(spaceships);
   },

   async getSpaceships(req, res) {
      const { captainId } = req.params;

      const captain = await Captain.findByPk(captainId, {
         include: { association: "spaceships" },
      });

      return res.json(captain);
   },
};
