import {find} from 'lodash'
import {posts, authors} from '../mocks'

const Query = {
  posts: () => posts,
  post: (_, {id}) => find(posts, {id}),
  author: (_, {id}) => find(authors, {id: id})
}

export default Query