const express = require('express')
const router = express.Router()



// Lista mockada
let listaProdutos = [
    {
        id: 1,
        nome: "Arroz",
        preco: 29.99
    }
]

// Middlware de validação
// Validar se o produto existe
function validarProduto(req, res, next) {
    console.log("Passou no validar produto")
    const id = req.params.id
    const produto = listaProdutos.find(produto => produto.id == id)
    if(produto) {
        req.produto = produto
        next()
    } else {
        res.status(404).json({mensagem: "Produto não encontrado"})
    }
}

// Validar os atributos do corpo
function validarAtributos(req, res, next) {
    const dadosRecebidos = req.body
    if(!dadosRecebidos.nome || !dadosRecebidos.preco){
        return res.status(400).json({mensagem: "Nome e preço são obrigatorios"})
    } else {
        next()
    }
}




// READ -> Buscar todos os produtos
router.get('/produtos', (req, res) =>{
    res.json(listaProdutos)
})

// READ -> Buscar produto pelo identificador ID
router.get('/produtos/:id', validarProduto, (req, res) =>{
   res.json(req.produto)
})

// CREATE -> Cadastrar produtos
router.post('/produtos', validarAtributos, (req, res) =>{
    const dados = req.body

        const produto = {
            id: Math.round(Math.random() * 1000),
            nome: dados.nome,
            preco: dados.preco
        }

        listaProdutos.push(produto)
        res.status(201).json(
            {
                mensagem: "Produto cadastrado com sucesso!",
                produto
            }
        )

})

// UPDATE -> Alterar produto
router.put('/produtos/:id', validarAtributos, validarProduto, (req, res) =>{
    const id = req.params.id
    const novosDados = req.body

    const index = listaProdutos.findIndex(produto => produto.id == id)

    const produto = {
        id: Number(id),
        nome: novosDados.nome,
        praco: novosDados.preco
    }

    listaProdutos[index] = produto
    res.status(200).json(
        {
            mensagem: "Produto alterado com sucesso!",
            produto
        }
    )
})
     


// DELETE -> Excluir produto
router.delete('/produtos/:id',validarProduto, (req, res) =>{
    const id = req.params.id

    const index = listaProdutos.findIndex(produto => produto.id == id)

    listaProdutos.splice(index, 1)
    res.status(200).json({mensagem: "Produto excluido com sucesso!"})
})





module.exports = router