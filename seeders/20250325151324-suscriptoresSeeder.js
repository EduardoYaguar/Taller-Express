'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Suscriptores', [
      {
        email: "mcaicedo@outlook.com",
        nombre: "Moises Caicedo",
        fecha_registro: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "evalencia@gmail.com",
        nombre: "Enner Valencia",
        fecha_registro: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    
    const suscriptores = await queryInterface.sequelize.query(
      `SELECT id FROM Suscriptores;`
    );
    const intereses = await queryInterface.sequelize.query(
      `SELECT id FROM Intereses;`
    );

    
    const suscriptor1Id = suscriptores[0][0].id;
    const suscriptor2Id = suscriptores[0][1].id;
    const interes1Id = intereses[0][0].id; // Tecnología
    const interes2Id = intereses[0][1].id; // Ciberseguridad
    const interes3Id = intereses[0][2].id; // Desarrollo de Software

    await queryInterface.bulkInsert('suscriptor_intereses', [
      { suscriptorId: suscriptor1Id, interesId: interes1Id },
      { suscriptorId: suscriptor1Id, interesId: interes2Id },
      { suscriptorId: suscriptor2Id, interesId: interes2Id },
      { suscriptorId: suscriptor2Id, interesId: interes3Id },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('suscriptor_intereses', null, {});
    await queryInterface.bulkDelete('Suscriptores', null, {});
  }
};

