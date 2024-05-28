const Servico = require('../models/Servico')

async function create(req, res) {
    try {
        const servico = new Servico(req.body)
        const servicoCriado = await servico.save()
        res.status(201).json(servicoCriado)
    } catch (error) {
        console.error("Erro ao criar serviço: ", error)
        res.status(400).json({
            mensagem: "Erro ao criar serviço!",
            erro: error.message
        })
    }
}

async function getAll(req, res) {
    try {
        const servico = await Servico.find().populate('responsavel')
        res.json(servico)
    } catch (error) {
        console.error("Erro ao buscar serviço: ", error)
        res.status(500).json({
            mensagem: "Erro ao buscar serviço!",
            erro: error.message
        })
    }
}

async function getById(req, res) {
    try {
        const servico = await Servico.findById(req.params.id).populate('responsavel')
        if (servico) {
            res.json(servico)
        } else {
            res.status(404).json({ mensagem: "Serviço não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao buscar serviço por ID: ", error)
        res.status(500).json({
            mensagem: "Erro ao buscar serviço por ID!",
            erro: error.message
        })
    }
}

async function update(req, res) {
    try {
        const servicoAtualizado = await Servico.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate(['responsavel'])
        if (servicoAtualizado) {
            res.json(servicoAtualizado)
        } else {
            res.status(404).json({ mensagem: "Serviço não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao atualizar serviço: ", error)
        res.status(400).json({
            mensagem: "Erro ao atualizar serviço!",
            erro: error.message
        })
    }
}

async function remove(req, res) {
    try {
        const servicoExcluido = await Servico.findByIdAndDelete(req.params.id).populate(['responsavel'])
        if (servicoExcluido) {
            res.json({
                mensagem: "Serviço excluído com sucesso!",
                itemPedidoExcluido: servicoExcluido
            })
        } else {
            res.status(404).json({ mensagem: "Serviço não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao excluir serviço: ", error)
        res.status(400).json({
            mensagem: "Erro ao excluir serviço!",
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
