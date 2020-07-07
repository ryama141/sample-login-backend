import { config } from "dotenv";
config();

const $ = (value: string) => value + "_NOT_DEFINED";

export default {
  PORT: Number(process.env.PORT) || 3333,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_CONNECTION_URL: process.env.MONGO_CONNECTION_URL || $("MONGO_CONNECTION_URL"),
};
