const mysql = require('mysql'); // mysql driver
const dotenv = require('dotenv'); // Dotenv para variaveis de ambiente
dotenv.config(); //permite o acesso as credencias do .env

const connection = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT
})

connection.connect((err) =>{
  if (err){
    console.log("erro", err.message);
  }
  console.log("db " + connection.state); 
});

