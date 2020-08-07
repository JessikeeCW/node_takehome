require ('dotenv').config()
const { Pool } = require('pg');


const key = process.env.POSTGRES_KEY

const pool = new Pool(
 { connectionString:key}
)
