import * as jwt from "jsonwebtoken";
import typeDefs from "./typeDefs";
import { makeExecutableSchema } from "apollo-server";
import { resolvers as TaskResolver } from "./modules/task";


const schema = makeExecutableSchema({
    typeDefs,
    resolvers: [TaskResolver]
})


const context = (ctx) => {
    const jwtToken = (ctx && ctx.req && ctx.req.headers && ctx.req.headers.authorization) || "";
    let jwtPayload = null;

    try {
        jwtPayload = jwt.decode(jwtToken.replace("Bearer ", ""));
    } catch (err) {
        jwtPayload = null;
    }


    return { auth: jwtPayload };
};

export { schema, context };