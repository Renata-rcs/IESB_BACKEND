const ItemPedido = require('../models/ItemPedido')

async function create(req, res) {
    try {
        const itemPedido = new ItemPedido(req.body)
        const itemPedidoCriado = await itemPedido.save()
        res.status(201).json(itemPedidoCriado)
    } catch (error) {
        console.error("Erro ao criar item do pedido: ", error)
        res.status(400).json({
            mensagem: "Erro ao criar item do pedido!",
            erro: error.message
        })
    }
}

async function getAll(req, res) {
    try {
        const itensPedidos = await ItemPedido.find().populate('pedido produto')
        res.json(itensPedidos)
    } catch (error) {
        console.error("Erro ao buscar itens do pedido: ", error)
        res.status(500).json({
            mensagem: "Erro ao buscar itens do pedido!",
            erro: error.message
        })
    }
}

async function getById(req, res) {
    try {
        const itemPedido = await ItemPedido.findById(req.params.id).populate('pedido produto')
        if (itemPedido) {
            res.json(itemPedido)
        } else {
            res.status(404).json({ mensagem: "Item do pedido não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao buscar item do pedido por ID: ", error)
        res.status(500).json({
            mensagem: "Erro ao buscar item do pedido por ID!",
            erro: error.message
        })
    }
}

async function update(req, res) {
    try {
        const itemPedidoAtualizado = await ItemPedido.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate(['pedido', 'produto'])
        if (itemPedidoAtualizado) {
            res.json(itemPedidoAtualizado)
        } else {
            res.status(404).json({ mensagem: "Item do pedido não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao atualizar item do pedido: ", error)
        res.status(400).json({
            mensagem: "Erro ao atualizar item do pedido!",
            erro: error.message
        })
    }
}

async function remove(req, res) {
    try {
        const itemPedidoExcluido = await ItemPedido.findByIdAndDelete(req.params.id).populate(['pedido', 'produto'])
        if (itemPedidoExcluido) {
            res.json({
                mensagem: "Item do pedido excluído com sucesso!",
                itemPedidoExcluido: itemPedidoExcluido
            })
        } else {
            res.status(404).json({ mensagem: "Item do pedido não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao excluir item do pedido: ", error)
        res.status(400).json({
            mensagem: "Erro ao excluir item do pedido!",
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
