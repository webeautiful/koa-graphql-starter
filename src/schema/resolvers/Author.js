import {Post} from '../../models'

const Author = {
  posts: author => {
    return Post.findAll({
      where: {
        authorId: author.id
      }
    })
  }
}

export default Author