const { RegularExpression } = require('graphql-scalars');
const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory
} = require('./product.resolvers');
const {login} = require('./auth.resolvers')
const { addCategory, getCategory } = require('./category.resolvers');
const { getAvos, getAttributesByID  } = require('./avos.resolvers');

const CategoryNameType = new RegularExpression(
  'CategoryNameType',
  /^[a-zA-Z0-9_ ]{3,12}$/
);

const resolvers = {
  Query: {
    product: getProduct,
    products: getProducts,
    category: getCategory,
    avocados: getAvos,
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
    login,
    addCategory,
  },
  CategoryNameType,
  Category: {
    products: getProductsByCategory,
  },
  Avocado: {
    attributes: getAttributesByID,
  },
};
module.exports=resolvers
