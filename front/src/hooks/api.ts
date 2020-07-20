import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  book?: Maybe<Book>;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  setBook?: Maybe<Book>;
};


export type MutationSetBookArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = (
  { __typename?: 'Query' }
  & { books?: Maybe<Array<Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'title' | 'author'>
  )>>> }
);

export type GetBookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBookQuery = (
  { __typename?: 'Query' }
  & { book?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'title'>
  )> }
);

export type SetBookMutationVariables = Exact<{
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
}>;


export type SetBookMutation = (
  { __typename?: 'Mutation' }
  & { setBook?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'title' | 'author'>
  )> }
);


export const GetBooksDocument = gql`
    query getBooks {
  books {
    title
    author
  }
}
    `;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, baseOptions);
      }
export function useGetBooksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, baseOptions);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksQueryResult = ApolloReactCommon.QueryResult<GetBooksQuery, GetBooksQueryVariables>;
export const GetBookDocument = gql`
    query getBook($id: ID!) {
  book(id: $id) {
    title
  }
}
    `;

/**
 * __useGetBookQuery__
 *
 * To run a query within a React component, call `useGetBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, baseOptions);
      }
export function useGetBookLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, baseOptions);
        }
export type GetBookQueryHookResult = ReturnType<typeof useGetBookQuery>;
export type GetBookLazyQueryHookResult = ReturnType<typeof useGetBookLazyQuery>;
export type GetBookQueryResult = ApolloReactCommon.QueryResult<GetBookQuery, GetBookQueryVariables>;
export const SetBookDocument = gql`
    mutation setBook($id: ID!, $title: String, $author: String) {
  setBook(id: $id, title: $title, author: $author) {
    id
    title
    author
  }
}
    `;
export type SetBookMutationFn = ApolloReactCommon.MutationFunction<SetBookMutation, SetBookMutationVariables>;

/**
 * __useSetBookMutation__
 *
 * To run a mutation, you first call `useSetBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setBookMutation, { data, loading, error }] = useSetBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      author: // value for 'author'
 *   },
 * });
 */
export function useSetBookMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetBookMutation, SetBookMutationVariables>) {
        return ApolloReactHooks.useMutation<SetBookMutation, SetBookMutationVariables>(SetBookDocument, baseOptions);
      }
export type SetBookMutationHookResult = ReturnType<typeof useSetBookMutation>;
export type SetBookMutationResult = ApolloReactCommon.MutationResult<SetBookMutation>;
export type SetBookMutationOptions = ApolloReactCommon.BaseMutationOptions<SetBookMutation, SetBookMutationVariables>;