const AvocadoService = require('../services/avos.service');

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
module.exports = {
  getAvos,
  getAttributesByID,
};
