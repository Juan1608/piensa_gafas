// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'piensa',
  password: 'mecatronica3a',
  port: 5432
});

module.exports = pool;
