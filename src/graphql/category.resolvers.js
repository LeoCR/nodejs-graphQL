const { checkJWTGraphQL } = require('../utils/checkJWTGraphQL');
const { checkRolesGraphQL } = require('../utils/checkRolesGraphQL');
const CategoryService = require('./../services/category.service');

const service = new CategoryService();

const addCategory = async (_, { dto }, context) => {
  const user = await checkJWTGraphQL(context)
  checkRolesGraphQL(user,'admin')
  return service.create(dto);
};
const getCategory = async(_,{id})=>{
  const category = await service.findOne(id);
  return category;
}
module.exports = {
  addCategory,
  getCategory,
};
