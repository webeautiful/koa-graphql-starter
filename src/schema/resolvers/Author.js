import {filter} from 'lodash'
import {posts} from '../mocks'

const Author = {
  posts: author => filter(posts, {authorId: author.id})
}

export default Author