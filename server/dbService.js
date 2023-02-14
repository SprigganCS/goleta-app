const mysql = require('mysql2'); // mysql driver
const dotenv = require('dotenv'); // Dotenv para variaveis de ambiente
dotenv.config(); //permite o acesso as credencias do .env
let instance = null;

const connection = mysql.createConnection({
    host: 'localhost' || process.env.HOST,
    user: 'root' || process.env.USER,
    password: '' || process.env.PASSWORD,
    database: 'goleta' || process.env.DATABASE,
    port: 3306 || process.env.DB_PORT
});

connection.connect((err) => {
  if (err){
    console.log(err.message);
  }
  console.log('db ' + connection.state); 

});

class DbService {
  static getDbServiceInstance() { 
    return instance ? instance : new DbService();
  }

  async getAllData() {
    try{
      const response = await new Promise((resolve, reject) => 
      {
        const query = "SELECT * FROM passageiros WHERE id = ?;";

        connection.query(query, [1],(err, results) => 
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
}

module.exports = DbService;