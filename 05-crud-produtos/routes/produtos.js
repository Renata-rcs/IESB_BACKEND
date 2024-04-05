const express = require('express')
const router = express.Router()

// Lista mockada
let listaProdutos = [
    {
        id: 1,
        nome: "Coca-cola",
        preco: 4.99
    },
    {
        id: 2,
        nome: "Batata frita",
        preco: 9.99
    },
    {
        id: 3,
        nome: "Arroz",
        preco: 9.99
    }
]


// READ -> Buscar todos os produtos da lista
router.get('/produtos', (req, res) =>{
    res.json(listaProdutos)
})

// READ -> Buscar produto pelo identificador ID
router.get('/produtos/:id', (req, res) =>{
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id)
    const produto = listaProdutos[index]
    res.json(produto)
})

// CREATE -> Cadastrar produtos
router.post('/produtos', (req, res) =>{
    const novoProduto = req.body
    //console.log(novoProduto)


    listaProdutos.length


    const produto = {
        id: listaProdutos.length + 1,
        nome: novoProduto.nome,
        preco: novoProduto.preco
    }

    //console.log(produto)

    listaProdutos.push(produto)
    res.status(201).json({mensagem: "Produto cadastrado com sucesso"})

})

// DELETE -> Excluir produto
router.delete('/produtos/:id', (req, res) =>{
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id)
    listaProdutos.splice(index, 1)
    res.json({mensagem: "Produto excluido com sucesso"})
})

// UPDATE -> Atualizar produto
router.put('/produtos/:id', (req, res) =>{
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id)

    const novosDados = req.body

    const produtoAlterado = {
        id: id,
        nome: novosDados.nome,
        preco: novosDados.preco
    }

    listaProdutos[index] = produtoAlterado

    res.json({mensagem: "Produto Atualizado"})
})



module.exports = router