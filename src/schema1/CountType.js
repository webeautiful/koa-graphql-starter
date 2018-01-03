import {GraphQLInt} from 'graphql'

let count = 0

const CountType = {
  type: GraphQLInt,
  resolve: function() {
    return count
  }
}

export default CountType

