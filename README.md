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

### create db
```
CREATE DATABASE test;

CREATE TABLE `author` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(64) NOT NULL,
  `lastName` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `post` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `authorId` int(11) NOT NULL COMMENT '作者id',
  `title` varchar(64) NOT NULL,
  `votes` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `authorId` (`authorId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```