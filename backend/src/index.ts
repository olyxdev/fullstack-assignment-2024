import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import express from "express";
import http from "http";
import { resolvers } from "./graphql/codegen/resolvers.generated.js";
import { typeDefs } from "./graphql/codegen/typeDefs.generated.js";
import { OlympicsContext } from "./graphql/context/olympicsContext.js";

/* This is a boilerplate fo develop a GraphQL server using @apollo/server */
/* The goal is for you to use this code as a starting point to develop your own GraphQL server and implement all the logic necessary 
  to fulfil the requirements in the assignment. 
*/
/* If you feel using different libraries or tools, feel free to do so. */

(async () => {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer<OlympicsContext>({
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    resolvers,
    typeDefs,
  });

  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server)
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );

  console.log(`🚀 Server ready at http://localhost:4000/`);
})();
