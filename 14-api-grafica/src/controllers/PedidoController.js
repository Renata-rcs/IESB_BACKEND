const Pedido = require('../models/Pedido');
const { sendEmail } = require('../services/emailService');

async function create(req, res) {
    try {
        const pedido = new Pedido(req.body);
        await pedido.save();

        const emailText = `Novo pedido criado:
        \nCliente: ${pedido.cliente}
        \nItens do Pedido: ${pedido.itemPedido}
        \nValor: ${pedido.valor}
        \nResponsavel: ${pedido.responsavel}`

        await sendEmail('renatacarvalhotop@gmail.com', 'Novo Pedido Recebido', emailText);

        res.status(201).json(pedido);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar pedido', error: error.message });
    }
}

async function getAll(req, res) {
    try {
        const pedidos = await Pedido.find().populate(['cliente', 'responsavel'])
        res.json(pedidos)
    } catch (error) {
        console.error("Erro ao buscar pedidos: ", error)
        res.status(500).json({
            mensagem: "Erro ao buscar pedidos!",
            erro: error.message
        })
    }
}

async function getById(req, res) {
    try {
        const pedido = await Pedido.findById(req.params.id).populate(['cliente', 'responsavel'])
        if (pedido) {
            res.json(pedido)
        } else {
            res.status(404).json({ mensagem: "Pedido não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao buscar pedido por ID: ", error)
        res.status(500).json({
            mensagem: "Erro ao buscar pedido por ID!",
            erro: error.message
        })
    }
}

async function update(req, res) {
    try {
        const pedidoAtualizado = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate(['cliente', 'responsavel'])
        if (pedidoAtualizado) {
            res.json(pedidoAtualizado)
        } else {
            res.status(404).json({ mensagem: "Pedido não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao atualizar pedido: ", error)
        res.status(400).json({
            mensagem: "Erro ao atualizar pedido!",
            erro: error.message
        })
    }
}

async function remove(req, res) {
    try {
        const pedidoExcluido = await Pedido.findByIdAndDelete(req.params.id).populate(['cliente', 'responsavel'])
        if (pedidoExcluido) {
            res.json({
                mensagem: "Pedido excluído com sucesso!",
                pedidoExcluido: pedidoExcluido
            })
        } else {
            res.status(404).json({ mensagem: "Pedido não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao excluir pedido: ", error)
        res.status(400).json({
            mensagem: "Erro ao excluir pedido!",
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
