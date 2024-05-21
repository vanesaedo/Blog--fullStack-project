require('dotenv').config();
const { Pool } = require('pg');
//const pool = require('../config/db_pgsql');
  //enviroment variables for db connection
const pool = new Pool({ 
    user: process.env.PG_USER, 
    host: process.env.PG_HOST, 
    database: process.env.PG_DATABASE, 
    port: process.env.PG_PORT,
    password: process.env.PG_PASSWORD
});

module.exports = pool;