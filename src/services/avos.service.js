const { models } = require('../db/sequelize');

class AvocadoService {
  constructor() {}
  async find() {
   const avocados = await models.Avocado.findAll();
    return avocados;
  }
  async getAttributesById(id) {
    const avocados = await models.Attribute.findOne( {
      where:{
        avocadoId:id
      },
    });
    return avocados;
  }
}
module.exports = AvocadoService;
