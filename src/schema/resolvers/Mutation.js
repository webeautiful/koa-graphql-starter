import {find} from 'lodash'
import {posts} from '../mocks'

const Mutation = {
  upvotePost: (_, {postId}) => {
    const post = find(posts, {id: postId})
    if (!post) {
      throw new Error(`Couldn't find post with id ${postId}`)
    }
    post.votes += 1
    return post
  }
}

export default Mutation