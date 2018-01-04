'use strict'

import koa from 'koa' // koa@2
import koaRouter from 'koa-router'
import koaBody from 'koa-bodyparser'
import schema from './schema'
import {graphqlKoa, graphiqlKoa} from 'apollo-server-koa'

global.__DEV__ = true
// Set up process
global.process = global.process || {}
global.process.env = global.process.env || {}
if (!global.process.env.NODE_ENV) {
  global.process.env.NODE_ENV = __DEV__ ? 'development' : 'production'
}

const app = new koa()
const router = new koaRouter()
const PORT = 3000

// koaBody is needed just for POST.
app.use(koaBody())

router.post('/graphql', koaBody(), graphqlKoa({schema: schema}))
router.get('/graphql', graphqlKoa({schema: schema}))
router.get('/graphiql', graphiqlKoa({endpointURL: '/graphql'}))

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT)
