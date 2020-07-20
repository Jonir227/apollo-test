import { ApolloServer } from 'apollo-server';
import typeDefs from './gql/typeDefs';
import { Resolvers, Book } from './types';

let books: Book[] = [
  {
    id: '1',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    id: '2',
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolvers: Pick<Resolvers, 'Query' | 'Mutation'> = {
  Query: {
    books: () => books,
    book: (parent, args, contet, info) => {
      return books.find((book) => book.id === args.id) ?? null;
    },
  },
  Mutation: {
    setBook: (_, args) => {
      let res;
      books = books.map((v) => {
        if (v.id === args.id) {
          res = {
            id: v.id,
            title: args.title ?? v.title,
            author: args.author ?? v.author,
          };
          return res;
        }
        return v;
      });
      return res ?? null;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers, cors: true });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
