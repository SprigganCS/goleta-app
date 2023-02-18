const express = require('express'); // Express web server framework
const app = express(); // cria instancia do express
const cors = require('cors'); // CORS middleware
const dotenv = require('dotenv'); // Dotenv para variaveis de ambiente
dotenv.config(); //permite o acesso as credencias do .env

const dbService = require('./dbService'); // importa o arquivo dbService.js

app.use(cors()); // permite o acesso a API de qualquer origem
app.use(express.json()); // permite acesso com o formato json
app.use(express.urlencoded({ extended : false })); // não envia dados em forms

app.get('/', (request, response) => {
    response.send("root");
});


//create
app.post('/Register', (request, response) => {
    const db = dbService.getDbServiceInstance();
    
    let a = "Andre"
    const result = dbService.insertNewPassenger(a);

    result
    .then(data => response.json({success: true})) //data retornado pelo insertNewPassenger e vira um objeto json que diz sucesso
    .then(err => console.log(err));
});

//read
app.get('/Users', (request, response) => {
    const db = dbService.getDbServiceInstance();
    
    const result = db.getAllPassengers();
    
    result
    .then(data => response.json({data: data}))
    .catch(err => console.log(err));
});

//update

//delete



app.listen(process.env.PORT || 3000, () =>  console.log(`Server running on port ${process.env.PORT}`));
