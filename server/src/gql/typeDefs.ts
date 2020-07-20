import { gql } from 'apollo-server';

export const typeDefs = gql`
  # 코멘트는 이렇게 작성합니다.

  # Book 스키마 입니다.
  type Book {
    id: ID! #반드시 존재하는 필드는 느낌표로 작성합니다.
    title: String
    author: String
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    setBook(id: ID!, title: String, author: String): Book
  }
`;

export default typeDefs;
