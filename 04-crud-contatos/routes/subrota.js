// Importa o modulo do express
const express = require('express')
// Criando um router
const router = express.Router()



router.get('/subrota', (req, res) =>{
    res.send("Subrota GET")
})

router.post('/subrota', (req, res) =>{
    res.send("Subrota POST")
})

router.put('/subrota', (req, res) =>{
    res.send("Subrota PUT")
})

router.delete('/subrota', (req, res) =>{
    res.send("Subrota DELETE")
})



// Exporta o router
module.exports = router

// Este router tbm é um middlware