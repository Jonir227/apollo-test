import React, { useDebugValue } from 'react';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  concat,
  ApolloLink,
} from '@apollo/client';
import Books from './Books';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: localStorage.getItem('token') || null,
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      // 각 쿼리들에 대한 타입 정의
      Book: {
        keyFields: ['title', 'author'], // 캐시 키를 만들어줌
        fields: {
          author: {
            read: undefined,
            merge: undefined,
          },
        },
      },
    },
  }),
  link: concat(httpLink, authMiddleware),
  credentials: 'include',
});

const store = new Store(client);

class Store {
  constructor(clinet) {
    this.clinet = client;
  }

  getData() {
    return this.client.query();
  }
}

const App = () => (
  <ApolloProvider client={client}>
    <div>Mesh Bookstore</div>
    <Books />
  </ApolloProvider>
);

export default App;
