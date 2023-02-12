const express = require('express'); // Express web server framework
const app = express(); // cria instancia do express
const cors = require('cors'); // CORS middleware
const dotenv = require('dotenv'); // Dotenv para variaveis de ambiente
dotenv.config(); //permite o acesso as credencias do .env

const dbService = require('./dbService'); // importa o arquivo dbService.js

app.use(cors()); // permite o acesso a API de qualquer origem
app.use(express.json()); // permite acesso com o formato json
app.use(express.urlencoded({ extended : false })); // não envia dados em forms


//create
app.post('/insert', (request, response) => {

    
});

//read
app.get('/getAll', (request, response) => {
    response.json({
        success: true
    })

});

//update

//delete



app.listen(process.env.PORT, () =>  console.log(`Server running on port ${process.env.PORT}`));