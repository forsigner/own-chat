import { GraphQLClient } from '@boter/graphql-client'

const endpoint = process.env.API_HOST + '/graphql'

export const graphqlClient = new GraphQLClient(endpoint)
