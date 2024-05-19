require('dotenv').config();

const config = {

host: process.env.PG_HOST, 
port: process.env.PG_PORT || 3000,
user: process.env.PG_USER,
database: process.env.PG_DATABASE,
password: process.env.PG_PASSWORD

};

module.exports = config;