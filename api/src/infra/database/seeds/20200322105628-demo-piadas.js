"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let basePiada = {
      curtas: [
        {
          piada:
            "O garoto apanhou da vizinha, e a mãe furiosa foi tomar satisfação: Por que a senhora bateu no meu filho? Ele foi mal-educado, e me chamou de gorda. E a senhora acha que vai emagrecer batendo nele?",
          origem: "https://www.piadasnet.com/piada1936curtas.htm",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          piada: "Quem ama um 486, Pentium 4 lhe parece!",
          origem: "https://www.piadasnet.com/piada1936curtas.htm",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          piada: "Memória não é documento!",
          origem: "https://www.piadasnet.com/piada1936curtas.htm",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          piada: "Em casa de programador, o espeto é de fibra ótica!",
          origem: "https://www.piadasnet.com/piada1936curtas.htm",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    };
    return queryInterface.bulkInsert("Piadas", basePiada.curtas);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
