const express = require('express')
const app = express()

// Midaleware -> intermediario
app.use(express.json())

app.get('/hello', (req, res) => {
    res.send("HELLO")
})

// Logica entrando com os exercicios

// 1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
// PATH PARAM
app.get('/exercicio1/:qdtMinina/:qtdMaxima', (req, res) =>{
    const quantidadeMinima = Number(req.params.qdtMinina)
    const quantidadeMaxima = Number(req.params.qtdMaxima)
    
    const estoqueMedia = (quantidadeMaxima + quantidadeMinima) / 2

    res.send(`Estoque média: ${estoqueMedia}`)
})


// QUERY PARAM
app.get('/exercicio1', (req, res) =>{
    console.log(req.query)
    const qtdMinima = Number(req.query.qtdMinima)
    const qtdMaxima = Number(req.query.qtdMaxima)
    console.log(qtdMinima + qtdMaxima)
    const resultado = (qtdMinima + qtdMaxima) / 2
    console.log(resultado)
    res.send(`Estoque média: ${resultado}`)
})

// BODY
app.post('/exercicio1', (req, res) =>{
    const quantidadeMinima = req.body.qtdMinima
    const quantidadeMaxima = req.body.qtdMaxima

    const estoqueMedia = (quantidadeMinima + quantidadeMaxima) / 2
    
    res.send(`Estoque média: ${estoqueMedia}`)
    
})

app.listen(3000, ()=>{
    console.log("Aplicação iniciada em http://localhost:3000")
})