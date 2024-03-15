// Criando uma instacia do modulo express
const express = require('express')
// Criando nossa aplicação
const app =  express()

// Definindo os caminhos da aplicação
app.get('/', (req, res) =>{
    res.send("Olá")
})

app.get('/hello', (req, res) =>{
    res.send("Hello World")
})

app.get('/nome', (req, res) =>{
    res.send("Renata Carvalho")
})


/* Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média 
aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou 
a mensagem de reprovado para média inferior a 7.0.
*/
// Path Param
app.get('/exercicio1/:nota1/:nota2/:nota3/:nota4', (req, res) => {
    //console.log(req.params)
    const nota1 = Number((req.params.nota1))
    const nota2 = Number((req.params.nota2))
    const nota3 = Number((req.params.nota3))
    const nota4 = Number((req.params.nota4))

    const media = (nota1 + nota2 + nota3 + nota4) / 4

    const mensagem = media >= 7 ? "Aprovado" : "Reprovado"

 /*   const mensagem2 = null
    if(media >= 7){
        mensagem2 = "Aprovado"
    }else {
        mensagem2 = "Reprovado"
    }
    
*/
res.send(`Média: ${media} Aluno ${mensagem}`)

})


app.get('/teste', (req, res) =>{
    res.send("Teste GET qualquer alteração OK")
})
app.post('/teste', (req, res) =>{
    res.send("Teste POST OK")
})











// Executando a aplicação na porta definida
app.listen(3000, () =>{
    console.log('Api inicida! Rodando em http://localhost:3000')
})

// http://localhost:3000