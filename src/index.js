require("dotenv").config();
const { ApolloServer, gql } = require('apollo-server');
const { schema, context } = require("./resolver");

const server = new ApolloServer({ schema, context });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});