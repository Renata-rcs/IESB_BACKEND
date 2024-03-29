// Importar express
const express = require('express')
// Criar um router
const router = express.Router()

// Dados escondidos
// Criar lista
let listaTarefas = ["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4"]


// CRUD 
// READ - RECUPERAR TODAS AS TAREFAS
router.get('/tarefas', (req, res) =>{
    res.json(listaTarefas)
})

// READ - RECUPERAR UMA TAREFA ESPECIFICA POR MEIO DO SEU IDENTIFICADOR
router.get('/tarefas/:id', (req, res) =>{
    const id = req.params.id
    const tarefa = listaTarefas[id]
    res.json(tarefa)
})

// CREATE - ADICIONAR UMA NOVA TAREFA
router.post('/tarefas', (req, res) =>{
    const tarefa = req.body
    listaTarefas.push(tarefa.nome)
    res.status(201).json({mensagem: "Tarefa adicionada com sucesso."})
})

// DELETE - REMOVER UMA TAREFA DA LISTA COM BASE EM SEU IDENTIFICADOR
router.delete('/tarefas/:id', (req, res) =>{
    const id = req.params.id
    listaTarefas.splice(id, 1)
    res.json({mensagem: "Tarefa removida com sucesso."})

})

// UPDATE - ATUALIZAR UMA TAREFA EXISTENTE COM BASE EM SEU IDENTIFICADOR
router.put('/tarefas/:id', (req, res) =>{
    const id = req.params.id
    const tarefa = req.body
    listaTarefas[id] = tarefa.nome
    res.json({mensagem: "Tarefa Atualizada."})
})






module.exports = router