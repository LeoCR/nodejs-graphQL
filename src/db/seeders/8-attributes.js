const { ATTRIBUTE_TABLE } = require('../models/attribute.model');

module.exports = {
  up: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkInsert(ATTRIBUTE_TABLE, [
      {
        description:
          'A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage',
        shape: 'Oval',
        hardiness: '1 °C',
        taste: 'Catchy, is an avocado',
        avocado_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description:
          'The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.',
        shape: 'Pear',
        hardiness: '-1 °C',
        taste: 'Magnificent, is a strong avocado',
        avocado_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description:
          'A seedling bred from "Hass" x "Thille" in 1982, "Gwen" is higher yielding and more dwarfing than "Hass" in California. The fruit has an oval shape, slightly smaller than "Hass" (100–200 g or 3.5–7.1 oz), with a rich, nutty flavor. The skin texture is more finely pebbled than "Hass", and is dull green when ripe. It is frost-hardy down to −1 °C (30 °F)',
        shape: 'Plump',
        hardiness: '-2 °C',
        taste: 'Superb, is an avocado',
        avocado_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description:
          'Developed by a farmer, James Bacon, in 1954, Bacon has medium-sized fruit with smooth, green skin with yellow-green, light-tasting flesh. When ripe, the skin remains green, but darkens slightly, and fruit yields to gentle pressure. It is cold-hardy down to −5 °C (23 °F)',
        shape: 'Oval',
        hardiness: '-5 °C',
        taste: 'Creamy, is an avocado',
        avocado_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description:
          'The "Hass" is the most common cultivar of avocado. It produces fruit year-round and accounts for 80% of cultivated avocados in the world.[21][55] All "Hass" trees are descended from a single "mother tree" raised by a mail carrier named Rudolph Hass, of La Habra Heights, California.',
        shape: 'Oval',
        hardiness: '-3 °C',
        taste: 'Gorgeous, is an avocado',
        avocado_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkDelete(ATTRIBUTE_TABLE, null, {});
  },
};
