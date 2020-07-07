import { App } from "@mayajs/core";
import { Mongo } from "@mayajs/mongo";
import { routes } from "./app.routing.module";
import env from "./environments";

@App({
  cors: true,
  logs: env.NODE_ENV,
  port: env.PORT,
  database: Mongo({
    connectionString: env.MONGO_CONNECTION_URL,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  }),
  routes
})
export class AppModule {}