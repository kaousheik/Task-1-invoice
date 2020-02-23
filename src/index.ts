import "reflect-metadata"
import {ApolloServer} from "apollo-server-express"
import * as Express from "express"
import { buildSchema, Query, Resolver } from "type-graphql"
import {createConnection} from "typeorm"
import { InvoiceResolver } from "./resolvers/InvoiceResolver"
// import { InvoiceResolver } from "./resolvers/InvoiceResolver"
@Resolver()
class eResolver {
    @Query(() => String)
    async hello(){
        return 'hello  World'
    }
} 
const main = async ()=> {
    await createConnection()
    const schema = await buildSchema({
        resolvers: [eResolver,InvoiceResolver] 
    })
    const apolloServer = new ApolloServer({schema})
    const app = Express()
    apolloServer.applyMiddleware({app})
    app.listen(4000, () => {
        console.log("server started on http://localhost:4000/graphql")
    })
}
main()