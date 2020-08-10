require ('dotenv').config()
const { Pool } = require('pg');


const key = process.env.POSTGRES_KEY

const pool = new Pool(
 { connectionString:key}
)
module.exports = {
  query: (text, params, callback) => {
    console.log('query executed', text)
    return pool.query(text, params, callback);
  }
}