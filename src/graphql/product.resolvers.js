const ProductsService = require('./../services/product.service');

const service = new ProductsService();

const getProduct = async(_, { id }) => {
  const product = await service.findOne(id)
  return product;
};
const getProducts = async() => {
  const products = await service.find({})
  return products;
};
const addProduct = async(_,{dto})=>{
  const { name, image, description, price,categoryId } = dto;
  const product = await service.create({
    name,
    image,
    description,
    price,
    categoryId,
  });
  return product;
}

const updateProduct = async (_, { id,dto }) =>{
  const product = await service.update(id,dto)
  return product;
}
const deleteProduct = async (_, { id }) => {
  await service.delete(id);
  return id;
};
  module.exports = {
    getProduct,
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
  };
