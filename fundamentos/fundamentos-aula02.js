// Comentario de uma linha
// ctrl / atalho para comentario
/* 
Comentario com mais de uma linha
*/

/*
ctrl + shift + a 
aaaaaa
bbbbbb
cccccc */

// Variavel

var nome = "Renata"

// Imprimir informação no console.log(nome)

console.log("Imprimindo um texto")
console.log(2)
console.log(nome)
console.log(1, 2, 3, 4)
console.log("Nome: ", "Renata")
console.log("Nome: ", + nome)
console.log("Qualquer texto" + "Qualquer outro texto")
console.log(2 + 2)

// Tipo de dados

var texto = "Teste"
console.log("Tipo da variavel: ",typeof texto)

var numero = 2
console.log("Tipo da variavel: ",typeof numero)

var numeroFlutuante = 2.544444
console.log("Tipo da variavel: ",typeof numeroFlutuante)

var numeroNegativoNegativo = -2.54444444
console.log("Tipo da variavel: ",typeof numeroNegativo)

var boleano = true // ou falsse
console.log("Tipo da variavel: ",typeof boleano)

var array = [1, 2, 3, 4]
console.log("Tipo da variavel: ",typeof array)

var testeAlteracao = "um texto"
testeAlteracao = 2
console.log("Teste Alteração: ",typeof testeAlteracao)

var arrayNumero = [1, 2, 3, 4]
var carros = ["Gol", "Uno", "Civic"]
var dinamico = [1, "Nome", true, {"Nome": "Teste"}]

var pessoa = {
    "Nome": "Renata",
    "Idade": 20,
    "Nascionalidade": "Brasileriro"
}
console.log(pessoa)
console.log( typeof pessoa)

const constante = "Constante" 
//constante = "Teste"
let nota = 0
let = 7

const notaA1 = 8
const notaA2 = 7
const media = notaA1 + notaA2 / 2

let aprovado = false

if(media >= 7){
    aprovado = true
}


