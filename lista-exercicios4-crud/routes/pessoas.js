const express = require('express')
const router = express.Router()

// Lista mockada
let  estruturaPessoa = [
    {
        id: 1,
        nome: "João",
        idade: 20,
        email: "joão@email.com",
        telefone: 61900010002
    },
    {
        id: 2,
        nome: "Pedro",
        idade: 21,
        email: "pedro@email.com",
        telefone: 61800010002
    },
    {
        id: 3,
        nome: "Paulo",
        idade: 22,
        email: "paulo@email.com",
        telefone: 61990010002
    }
]

// READ -> Buscar todas as pessoas da lista
router.get('/pessoas', (req, res) => {
    res.json(estruturaPessoa)
})

// READ -> Buscar pessoa pelo IDENTIFICADOR ID
router.get('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = estruturaPessoa.findIndex(pessoa => pessoa.id == id)
    const pessoa = estruturaPessoa[index]
    res.json(pessoa)
})

// CREATE -> Cadastrar pessoa
router.post('/pessoas', (req, res) =>{
    const novaPessoa = req.body

    //console.log(novaPessoa)

    estruturaPessoa.length

    const pessoa = {
        id: estruturaPessoa.length + 1,
        nome: novaPessoa.nome,
        idade: novaPessoa.idade,
        email: novaPessoa.email,
        telefone: novaPessoa.telefone
    }

    //console.log(novaPessoa)

    estruturaPessoa.push(pessoa)
    res.status(201).json({mensagem: "Pessoa cadastrada com sucesso."})

})

// DELETAR -> Excluir pessoa
router.delete('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = estruturaPessoa.findIndex(pessoa => pessoa.id == id)
    estruturaPessoa.splice(index, 1)
    res.json({mensagem: "Pessoa excluida com sucesso."})
})

// UPDATE -> Atualizar pessoa
router.put('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = estruturaPessoa.findIndex(pessoa => pessoa.id == id)

    const novosDados = req. body

    const pessoaAlterada = {
        id: id,
        nome: novosDados.nome,
        idade: novosDados.idade,
        email: novosDados.email,
        telefone: novosDados.telefone
    }

    estruturaPessoa[index] = pessoaAlterada

    res.json({mensagem: "Pessoa Atualizada."})
})




module.exports = router

