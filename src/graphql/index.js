const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} = require('@apollo/server/plugin/landingPage/default');
const { loadFiles } = require('@graphql-tools/load-files');
const {buildContext} = require('graphql-passport');
const {typeDefs:scalarTypeDefs,resolvers:scalarsResolvers}=require('graphql-scalars');

const resolvers = require('./resolvers')

const useGraphql = async(app) => {
  const typeDefs = [...(await loadFiles('./src/**/*.graphql')),scalarTypeDefs];
  const allResolvers=[
    resolvers,
    scalarsResolvers
  ]
  const server = new ApolloServer({
    typeDefs,
    resolvers: allResolvers,
    plugins: [
      // Install a landing page plugin based on NODE_ENV
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageProductionDefault({
            graphRef: 'curso-node-graphql@graph-variant',
            footer: false,
          })
        : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ],
  });
  await server.start();
  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: async ({ req, res }) =>
        buildContext({ token: req.headers.token,req,res }),
    })
  );
};

module.exports = useGraphql;
