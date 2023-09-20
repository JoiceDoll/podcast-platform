import pg from "pg";
import "dotenv/config";

const db = new pg.Client({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_DATABASE,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});



export default db;
