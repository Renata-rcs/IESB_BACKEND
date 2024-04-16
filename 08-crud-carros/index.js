const express = require('express')
const app = express()


// middlewares
// que transforma o corpo da requisiçãoem json
app.use(express.json())




const carrosRouter = require('./routes/carros')
app.use(carrosRouter)


app.listen(3000, ()=> {
    console.log("Aplicação rodando em http://localhost:3000")
})