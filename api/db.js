import mysql from 'mysql2';


export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "kejsishehaj13!",
  database: "blog",
  connectionLimit: 10
})

export default db 