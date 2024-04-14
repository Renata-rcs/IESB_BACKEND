const express = require('express')
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

 // Função Validar Carro
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


 // Função Validar Atributos
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


// filter sum 
router.get('/carro/total/:cor', (req, res) => {
    const cor = req.params.cor;
    const carrosFiltrados = listaCarro.filter(carro => carro.cor === cor);

    let sum = 0;
    carrosFiltrados.forEach(carro => {
        sum += carro.valor;
        // ou sum = sum + carro.cor
    });

    res.status(200).json({ total: sum });
});

// usando filter e redulce
router.get('/carro/reduce/:cor', (req, res) => {
    const cor = req.params.cor;
    const carrosFiltrados = listaCarro.filter(carro => carro.cor === cor);

    const total = carrosFiltrados.reduce((acc, carro) => {
        return acc + carro.valor;
    }, 0);

    res.status(200).json({ total });
});

//READ -> Buscar um valor > determinado
router.get('/carro/valor-maior-que/:valor', (req, res) => {
    const valor = parseFloat(req.params.valor);
    const carros = listaCarro.filter(carro => carro.valor > valor);
    res.status(200).json(carros);
});





 





 module.exports = router