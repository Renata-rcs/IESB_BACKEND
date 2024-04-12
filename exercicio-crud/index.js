const express = require('express')
const app = express()





app.use(express.json())



const carro = require('./router/carro')
app.use(carro)





app.listen(3000, ()=>{
    console.log("Aplicação crud carro rodando em http://localhost:3000")
})