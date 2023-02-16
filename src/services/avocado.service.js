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
  async findOne(id){
    const avocado = await models.Avocado.findOne({
      where: {
        id,
      },
    });
    return avocado;
  }
  async create(data){
    console.log('data ######=>', data);
    const newAvocado = await models.Avocado.create(data, {
      include: ['attributes'],
    });
    return newAvocado;
  }
}
module.exports = AvocadoService;
