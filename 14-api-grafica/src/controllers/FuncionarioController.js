const Funcionario = require('../models/Funcionario')

async function create(req, res) {
    try {
        const funcionario = new Funcionario(req.body)
        const funcionarioCriado = await funcionario.save()
        res.status(201).json(funcionarioCriado)
    } catch (error) {
        console.error("Erro ao criar funcionário: ", error)
        res.status(400).json({
            mensagem: "Erro ao criar funcionário!",
            erro: error.message
        })
    }
}

async function getAll(req, res) {
    try {
        const funcionarios = await Funcionario.find()
        res.json(funcionarios)
    } catch (error) {
        console.error("Erro ao buscar funcionários: ", error)
        res.status(500).json({
            mensagem: "Erro ao buscar funcionários!",
            erro: error.message
        })
    }
}

async function getById(req, res) {
    try {
        const funcionario = await Funcionario.findById(req.params.id)
        if (funcionario) {
            res.json(funcionario)
        } else {
            res.status(404).json({ mensagem: "Funcionário não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao buscar funcionário por ID: ", error)
        res.status(500).json({
            mensagem: "Erro ao buscar funcionário por ID!",
            erro: error.message
        })
    }
}

async function update(req, res) {
    try {
        const funcionarioAtualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (funcionarioAtualizado) {
            res.json(funcionarioAtualizado)
        } else {
            res.status(404).json({ mensagem: "Funcionário não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao atualizar funcionário: ", error)
        res.status(400).json({
            mensagem: "Erro ao atualizar funcionário!",
            erro: error.message
        })
    }
}

async function remove(req, res) {
    try {
        const funcionarioExcluido = await Funcionario.findByIdAndDelete(req.params.id)
        if (funcionarioExcluido) {
            res.json({
                mensagem: "Funcionário excluído com sucesso!",
                funcionarioExcluido
            })
        } else {
            res.status(404).json({ mensagem: "Funcionário não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao excluir funcionário: ", error)
        res.status(400).json({
            mensagem: "Erro ao excluir funcionário!",
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
