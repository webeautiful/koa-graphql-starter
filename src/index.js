import koa from 'koa' // koa@2
import koaRouter from 'koa-router'
import koaBody from 'koa-bodyparser'
import schema from './schema'
import {graphqlKoa, graphiqlKoa} from 'apollo-server-koa'

const app = new koa()
const router = new koaRouter()
const PORT = 3000

// koaBody is needed just for POST.
app.use(koaBody())

router.post('/graphql', koaBody(), graphqlKoa({schema: schema}))
router.get('/graphql', graphqlKoa({schema: schema}))
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT)
