/**
 * import graphql-tools.
 * that's defined 'makeExecutableSchema'
 */

import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';
import resolvers from './resolver.js';
/**
 * Schema is Difine Data Transfer Object
 * 1. We define type Author
 * person organization from age, name, books.
 * 2. schema generate.
 * caution : You define variables not use '' use ``
 * Schema generate name called typeDefs is first arguments api call name makeExecutableSchema.
 */
const typeDefs = `
        # Comments in GraphQL are defined with the hash (#) symbol.
        type Author {
        id : Int
        age : Int
        name : String
        books : [String]
    }
    # The "Query" type is the root of all GraphQL queries.
    # (A "Mutation" type will be covered later on.)
    type Query {
       # authors is group of Author
       authors: [Author]
       # author is one Author
       author(id : Int) : Author
    }
    # The "Mutation" type is insert, update
    type Mutation {
        addAuthor(id: Int, name: String!, age: Int!, books: [String!]): Author
    }
`;

/**
 * difine schema
 * check point
 * 1. second argument only use resolvers other keyword return null.
 */
const schema = makeExecutableSchema({typeDefs, resolvers});
// addMockFunctionsToSchema({schema});

export default schema;