import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { ApolloServer } from 'apollo-server'

import resolvers from './resolvers'
import typeDefs from './typeDefs'

async function cn() {
  await createConnection();
}
cn()

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

