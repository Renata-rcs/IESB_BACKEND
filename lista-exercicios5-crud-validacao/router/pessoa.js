const express = require('express')
const router = express.Router()


// Lista mockada
let estruturaPessoa  =  [
    {
        id : 1,
        nome : "João" ,
        idade : 20 ,
        email : "joão@email.com" ,
        telefone : 61900010002
    } ,
    {
        id : 2,
        nome : "Pedro" ,
        idade : 21 ,
        email : "pedro@email.com" ,
        telefone : 61800010002
    } ,
    {
        id : 3,
        nome : "Paulo" ,
        idade : 22 ,
        email : "paulo@email.com" ,
        telefone : 61990010002
    }
]

// READ -> Buscar todas as pessoas
router.get('/pessoasComValidacao', (req, res) =>{
    res.json(estruturaPessoa)
})


// READ -> Buscar pessoa pelo identificador ID
router.get('/pessoasComvalidacao/:id', (req, res) =>{
    const id = req.params.id
    const pessoa = estruturaPessoa.find(pessoa => pessoa.id == id)
    if(pessoa){
        res.status(200).json(pessoa)
    }
    else{
        res.status(404).json({mensagem: "Pessoa não encontrado!"})
    
    }

})

// CREATE -> Cadastrar pessoas
router.post('/pessoasComValidacao', (req, res) =>{
    const dados = req.body
    console.log(dados)
    if (!dados.nome || !dados.idade || !dados.email || !dados.telefone) {
        res.status(400).json({mensagem: "Nome, idade, email e telefone são obrigatórios!"})
    } else {
        const pessoa = {
            id: Math.round(Math.random() * 1000),
            nome: dados.nome,
            idade: dados.idade,
            email: dados.email,
            telefone: dados.telefone
        }
        console.log(pessoa)

        estruturaPessoa.push(pessoa)
        
        res.status(201).json({
            mensagem: "Pessoa cadastrada com sucesso!",
            pessoa
        })
    }
})


// DELETE -> Excluir pessoa pelo id
router.delete('/pessoasComValidacao/:id', (req, res) =>{
    const id = req.params.id

    const index = estruturaPessoa.findIndex(pessoa => pessoa.id == id)
    if(index == -1) {
        res.status(404).json({mensagem: "Pessoa não encontrada!"})
    }
    else{
        estruturaPessoa.splice(index, 1)
        res.status(200).json({mensagem: "Pessoa excluida com sucesso!"})
    }
})

// UPDATE -> Atualizar pessoa
router.put('/pessoasComValidacao/:id', (req, res) =>{
    const id = req.params.id
    const novosDados = req.body

    if (!novosDados.nome || !novosDados.idade || !novosDados.email || !novosDados.telefone) {
        res.status(400).json({mensagem: "Nome, idade, email e telefone são obrigatórios!"})
    } else {
        const index = estruturaPessoa.findIndex(pessoa => pessoa.id == id)
        if (index == -1){
            res.status(404).json({mensagem: "Pessoa não encontrada!"})
        } else {
            const pessoa = {
                id: Number(id),
                nome: novosDados.nome,
                idade: novosDados.idade,
                email: novosDados.email,
                telefone: novosDados.telefone
            }

            estruturaPessoa[index] = pessoa
            res.status(200).json({
                mensagem: "Pessoa alterada com sucesso!"
            })
        }
    }
})





module.exports = router


