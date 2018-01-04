import {find} from 'lodash'
import {authors} from '../mocks'

const Post = {
  author: post => find(authors, {id: post.authorId})
}

export default Post