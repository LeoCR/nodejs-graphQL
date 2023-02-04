const boom = require('@hapi/boom');

async function checkJWTGraphQL(context) {
  const {user}=await context.authenticate('jwt', {
    session: false,
  });
  if (!user) {
    throw boom.unauthorized('Invalid JSON Web Token');
  }
  return user
}

module.exports = {
  checkJWTGraphQL,
};
