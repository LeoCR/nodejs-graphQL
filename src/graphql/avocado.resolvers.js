const AvocadoService = require('../services/avocado.service');
const { checkJWTGraphQL } = require('../utils/checkJWTGraphQL');
const service = new AvocadoService();

const getAvos= async () => {
  const avos = await service.find();
  return avos;
};
const getAttributesByID = async (parent) => {
  const id = parent.dataValues.id;
  const avos = await service.getAttributesById(id);
  return avos;
};

const getAvo = async (_, { id }) => {
  const avo = await service.findOne(id);
  return avo;
};
const addAvocado = async (_, { dto }, context) => {
  await checkJWTGraphQL(context);
  const { name, image, sku, price,description,taste,shape,hardiness } = dto;
  const avocado = await service.create({
    name,
    image,
    sku,
    price,
    attributes: {
      description,
      taste,
      shape,
      hardiness,
    },
  });
  return avocado;
};
module.exports = {
  getAvos,
  getAvo,
  getAttributesByID,
  addAvocado,
};
