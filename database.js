import * as dotenv from 'dotenv';
dotenv.config();

import pg from 'pg';
const database = new pg.Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE_NAME
})

export default database;