import { gql } from 'apollo-server'

const typeDefs = gql`
  type Book {
    id: ID!
    title: String
    author: String
    year: Int
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    book(author: String!, title: String!, year: Int!): Book
  }
`;

export default typeDefs
