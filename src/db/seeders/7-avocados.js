const { AVOCADO_TABLE } = require('../models/avocado.model');

module.exports = {
  up: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkInsert(AVOCADO_TABLE, [
      {
        name: 'Maluma Hass Avocado',
        image: 'http://localhost:3000/images/maluma.jpg',
        sku: 'NUR72KCM',
        price: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Fuerte Avocado',
        image: 'http://localhost:3000/images/fuerte.jpg',
        sku: 'AX4M8SJV',
        price: 2.5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Gwen Hass Avocado',
        image: 'http://localhost:3000/images/gwen.jpg',
        sku: 'HYA78F6J',
        price: 3.75,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Bacon Avocado',
        image: 'http://localhost:3000/images/bacon.jpg',
        sku: 'BXD100BLK',
        price: 2.5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Hass Avocado',
        image: 'http://localhost:3000/images/hass.jpg',
        sku: 'RMRCZN7E',
        price: 4.25,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },
  down: (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkDelete(AVOCADO_TABLE, null, {});
  },
};
