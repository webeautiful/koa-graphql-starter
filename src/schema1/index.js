import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import HelloworldType from './HelloworldType'
import CountType from './CountType'

// https://github.com/DiscipleD/graphql-demo
const queryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    hello: HelloworldType,
    count: CountType
  })
})
const mutationType = new GraphQLObjectType({
  name: 'RootMutationType'
})

const schema = new GraphQLSchema({
  query: queryType,
  // mutatioin: mutationType
})

export default schema
