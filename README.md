koa-graphql-starter
===

### Start
`yarn start`

### Client
> http://localhost:3000/graphiql
 
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
