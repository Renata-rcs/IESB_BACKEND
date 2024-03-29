// Importa o modulo do express
const express = require('express')
// Criando um router
const router = express.Router()



router.get('/tutorial', (req, res) =>{
    res.send("Tutorial GET")
})

router.post('/tutorial', (req, res) =>{
    res.send("Tutorial POST")
})

router.put('/tutorial', (req, res) =>{
    res.send("Tutorial PUT")
})

router.delete('/tutorial', (req, res) =>{
    res.send("Tutorial DELETE")
})



// Exporta o router
module.exports = router

// Este router tbm é um middlware