import 'reflect-metadata'
import express from 'express'
//@ts-ignore
import { ApolloServer } from 'apollo-server-express'
import { UserResolver } from './blog/services/user/user.resolver'
//@ts-ignore
import { buildSchema } from 'type-graphql'
import { GraphQLSchema } from 'graphql'
const app: express.Application = express()
const path = '/blog/graphql'
const PORT = process.env.PORT || 4000
const main = async () => {
    const schema: GraphQLSchema = await buildSchema({
        resolvers: [UserResolver],
    })
    const apolloServer = new ApolloServer({
        schema,
        introspection: true,
        playground: true,
        tracing: true,
    })
    apolloServer.applyMiddleware({ app, path })

    app.listen(PORT, () => {
        console.log(`🚀 started http://localhost:${PORT}${path}`)
    })
}

main()
