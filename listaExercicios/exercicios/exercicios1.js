let prompt = require('prompt-sync')();

let nome = prompt("Qual o seu nome? ")

console.log("Olá " + nome + " Bem vinda")

let idade = prompt("Qual é sua idade? ")

console.log("Sua idade é: " + idade)

if(idade >= 18) {
    console.log("Você é maior de idade.")
}
else{
    console.log("Você é menor de idade.")
}

//let notaProva1 = Number(prompt("Nota da prova A1: ")) // tipo 1
//let notaProva2 = Number(prompt("Nota da prova A2: "))

let notaProva1 = prompt("Nota da prova A1: ")
let notaProva2 = prompt("Nota da prova A2: ")

let nota1 = Number(notaProva1)
let nota2 = Number(notaProva2)

let media = (nota1 + nota2) / 2

console.log("MÉDIA: ", media)

if(media >= 6) {
    console.log("APROVADO")
}
else{
    console.log("REPROVADO")
}