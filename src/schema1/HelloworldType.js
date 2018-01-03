import {GraphQLString} from 'graphql'

const HelloworldType = {
  type: GraphQLString,
  resolve() {
    return 'Hello world!'
  }
}

export default HelloworldType