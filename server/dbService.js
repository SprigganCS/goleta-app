const mysql = require('mysql'); // mysql driver
const dotenv = require('dotenv'); // Dotenv para variaveis de ambiente
dotenv.config(); //permite o acesso as credencias do .env

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});


connection.connect((error) => { //cria a conexão com um parametro para caso dê erro
    if (error) { //se houver erro
        console.log(error.message); //imprime a mensagem de erro
    }
    console.log('db '+ connection.state); //imprime o estado da conexão
});