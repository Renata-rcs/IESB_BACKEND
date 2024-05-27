const Produto = require('../models/Produto')

async function create(req, res) {
    try {
        const produto = new Produto(req.body)
        const produtoCriado = await produto.save()
        res.status(201).json(produtoCriado)
    } catch (error) {
        console.error("Erro ao criar produto: ", error)
        res.status(400).json({
            mensagem: "Erro ao criar produto!",
            erro: error.message
        })
    }
}

async function getAll(req, res) {
    try {
        const produtos = await Produto.find()
        res.json(produtos)
    } catch (error) {
        console.error("Erro ao buscar produtos: ", error)
        res.status(500).json({
            mensagem: "Erro ao buscar produtos!",
            erro: error.message
        })
    }
}

async function getById(req, res) {
    try {
        const produto = await Produto.findById(req.params.id)
        if (produto) {
            res.json(produto)
        } else {
            res.status(404).json({ mensagem: "Produto não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao buscar produto por ID: ", error)
        res.status(500).json({
            mensagem: "Erro ao buscar produto por ID!",
            erro: error.message
        })
    }
}

async function update(req, res) {
    try {
        const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (produtoAtualizado) {
            res.json(produtoAtualizado)
        } else {
            res.status(404).json({ mensagem: "Produto não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao atualizar produto: ", error)
        res.status(400).json({
            mensagem: "Erro ao atualizar produto!",
            erro: error.message
        })
    }
}

async function remove(req, res) {
    try {
        const produtoExcluido = await Produto.findByIdAndDelete(req.params.id)
        if (produtoExcluido) {
            res.json({
                mensagem: "Produto excluído com sucesso!",
                produtoExcluido
            })
        } else {
            res.status(404).json({ mensagem: "Produto não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao excluir produto: ", error)
        res.status(400).json({
            mensagem: "Erro ao excluir produto!",
            erro: error.message
        })
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}
