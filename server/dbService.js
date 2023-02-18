const mysql = require('mysql2'); // mysql driver
const dotenv = require('dotenv'); // Dotenv para variaveis de ambiente
dotenv.config(); //permite o acesso as credencias do .env
let instance = null;

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
  if (err){
    console.log(err.message);
  }
  console.log('db ' + connection.state); 

});

class DbService { //criação de uma classe que cria uma instancia do banco de dados
  static getDbServiceInstance() { 
    return instance ? instance : new DbService();
  }

  async getAllPassengers() {
    try{
      const response = await new Promise((resolve, reject) => 
      {
        const query = "SELECT * FROM tbl_passageiros;";

        connection.query(query,(err, results) => 
        {
          if (err) reject(new Error(err.message));
          resolve(results);
        })
      });

      //console.log(response);
      return response;
    
      } catch (error) {
      console.log(error);
    }
  }

  async insertNewPassenger(name){
    try{

      var date = new Date(); //data atual para pegar o horario e adicionar no BD o momento de cadastro dos passageiros
      var datetime = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(); //data e hora atual
      datetime = datetime.replace(/-/g, '/'); //formata para entrar no BD
      const insertId = await new Promise((resolve, reject) => {

        const query = "INSERT INTO tbl_passageiros (nome_passageiro, data_cadastro) VALUES (?, ?);"; //interrogações para evitar sql injection

        connection.query(query, [name, datetime], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.insertId); //não entendi kkk

        });
      });
      console.log(response);
      //return response;
      
    }catch(error){
      console.log(error);
    }

  }
}

module.exports = DbService; //exporta a classe