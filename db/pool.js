const { Pool } = require('pg');
const pool = new Pool({
    port: '5432',
    user: 'postgres',
    host: 'localhost',
    database: 'marta',
    password: 'root',
});

module.exports = pool;

