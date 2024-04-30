require('dotenv').config()

const mongoose = require('mongoose')

const express = require('express')
const app = express()

app.use(express.json())


app.get('/hello', (req, res) => {
    res.json("Hello")
})
const DB_USERNAME= process.env.DB_USERNAME;
const DB_PASSWORD= process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@minhaapi.8ofkydu.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.log("Erro ao conectar ao MongoDB:", err))

app.listen(3000, () =>{
    console.log("Aplicação rodando em http://localhost:3000")
})