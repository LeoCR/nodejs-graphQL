const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy');
const JwtStrategy = require('./strategies/jwt.strategy');
const GrphQLlocalStrategy = require('./strategies/local-graphql.strategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
passport.use(GrphQLlocalStrategy);
