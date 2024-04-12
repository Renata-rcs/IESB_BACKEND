const express = require('express')
const { mkdirSync } = require('fs')
const { json } = require('stream/consumers')
const router = express.Router()


let listaCarro = [
    {
        id: 1,
        marca: "honda",
        modelo: "civic",
        cor: "prata",
        valor: 35.000

    }
 ]

 function validarCarro(req, res, next) {
    const id = req.params.id
    const carro = listaCarro.find(carro => carro.id == id)
    if(carro){
        req.carro = carro
        next()
    }else {
        return res.status(404).json({mensagem: " Carro naõ encontardo"})
    }
    
    
 }

 function validarAtributos(req, res, next) {
    const dadosRecebidos = req.body
    if(!dadosRecebidos.marca || !dadosRecebidos.modelo || !dadosRecebidos.cor || !dadosRecebidos.valor){
        return res.status(400).json({mensagem:"Marca,modelo,cor e valor são obrigatórios "})
    }else{
        next()
    }

    
 }


//buscar todos
router.get('/carro', (req, res) => {
    res.status(200).json(listaCarro)
})


//buscar por id 
router.get('/carro/:id', validarCarro ,(req, res, next) => {
    res.json(req.carro)
})
// criar
router.post('/carro', validarAtributos,(req, res, ) => {
    const dado = req.body

    const carro = {
        id: Math.round(Math.random() * 1000),
        marca: dado.marca,
        modelo: dado.modelo,
        cor: dado.cor,
        valor: dado.valor

    }

    listaCarro.push(carro)
    res.status(201).json({mensagem: "Carro cadastrado com sucesso!"})

})

//update
router.put('/carro/:id',validarCarro ,validarAtributos,(req, res, ) => {
    const id = req.params.id
    const novosDados = req.body

    const index = listaCarro.findIndex(carro => carro.id == id)

    const carro = {
        id: Number(id),
        marca: novosDados.marca,
        modelo: novosDados.modelo,
        cor: novosDados.cor,
        valor: novosDados.valor

    }
    listaCarro[index] = carro
    res.status(200).json({mensagem: "Dados do Carro alterado!"})

})



// delete
router.delete('/carro/:id', validarCarro, (req, res) =>{
    const id = req.params.id
    const index = listaCarro.findIndex(carro => carro.id == id)

    listaCarro.splice(index, 1)
    res.status(200).json({mensagem: " Carro excluido com sucesso!"})
})

// filtar
router.get('/carro/cor/:cor', (req, res) => {
    const cor = req.params.cor
    const carros = listaCarro.find(carro => carro.cor == cor)

    

    res.status(200).json(carros)
})


// filtar
router.get('/carro/total/:cor', (req, res) => {
    const cor = req.params.cor;
    const carrosFiltrados = listaCarro.filter(carro => carro.cor === cor);

    let soma = 0;
    carrosFiltrados.forEach(carro => {
        soma += carro.valor;
    });

    res.status(200).json({ total: soma });
});






 module.exports = router