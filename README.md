koa-graphql-starter
===

### Start
`yarn start`

Then, just point your browser at:
> http://localhost:3000/graphiql
 
### Query
#### request
```
query PostsForAuthor {
  author(id: 2) {
    firstName
    posts {
      title
      votes
    }
  }
}
```

#### response
```
{
  "data": {
    "author": {
      "firstName": "Sashko",
      "posts": [
        {
          "title": "Welcome to Apollo",
          "votes": 3
        },
        {
          "title": "Advanced GraphQL",
          "votes": 1
        }
      ]
    }
  }
}
```

### Mutation
#### request
```
mutation updateVote {
  upvotePost(postId: 1) {
    id,
    votes
  }
}
```
#### response
```
{
  "data": {
    "upvotePost": {
      "id": 1,
      "votes": 5
    }
  }
}
```