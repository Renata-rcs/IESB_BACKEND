const express = require('express')
const app = express()





// middleware
app.use(express.json())



// Rotas
const livrosRouter = require('./routes/livros')
app.use(livrosRouter)











app.listen(3000, ()=> {
    console.log("Aplicação rodando em http://localhost:3000")
})