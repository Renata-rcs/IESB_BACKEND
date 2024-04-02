// Imports
const express = require('express')
const cors = require('cors')
const tutorial = require('./routes/tutorial')
const subrota = require('./routes/subrota')
const contatos = require('./routes/contatos')

// Porta
const port = 3000

// Configuração
const app = express()
// configuração de cors
app.use(cors({origin: '*'}))

// Middlewares
// middware que transforma o corpo da requisição em objeto dentro da nossa aolicação
app.use(express.json())
// Trazendo as rotas do modulo tutorial para dentro da minha aplicação
app.use(tutorial)
// Trazendo as rotas do modulo subrota
app.use('/rota', subrota)
// Trazendo as rotas do modulo contatos
app.use(contatos)

// contrato -> configuração das rotas e da lógica
app.get('/', (req, res) =>{
    res.send("Aplicação rodando!!!")
})







// Start da nossa aplicação
app.listen(3000, () =>{
    console.log("Api rodando em http://localhost:3000")
})