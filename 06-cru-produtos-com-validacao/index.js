const express = require('express')
const app = express()




app.use(express.json())

// Rotas
const produtosRouter = require('./routes/produtos')
app.use(produtosRouter)


app.listen(3000, () =>{
    console.log("Aplicaçaão rodando em http://localhost:3000")
})