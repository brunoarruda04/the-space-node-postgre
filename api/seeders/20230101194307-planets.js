module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert(
         "planets",
         [
            {
               name: "Mercury",
               position: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               name: "Venus",
               position: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               name: "Earth",
               position: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               name: "Mars",
               position: 4,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               name: "Jupiter",
               position: 5,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               name: "Saturn",
               position: 6,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               name: "Uranus",
               position: 7,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               name: "Neptune",
               position: 8,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      );
   },

   down: async (queryInterface) => {
      await queryInterface.bulkDelete("planets", null, {});
   },
};
