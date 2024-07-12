import pg from 'pg';
import env from "../config/env.js";

const { Client } = pg;

const db = new Client({
  host: env.db.connection.host,
  user: env.db.connection.user,
  password: env.db.connection.password,
  database: env.db.connection.database,
  port: env.db.connection.port
});

db.connect()
  .then(() => console.log("base de datos conectada"))
  .catch((err) => console.error(err))

export default db;