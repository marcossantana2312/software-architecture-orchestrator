require("dotenv").config();
const { ApolloServer, gql } = require('apollo-server');
const { schema, context } = require("./resolver");

const server = new ApolloServer({ schema, context, playground: true });

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});