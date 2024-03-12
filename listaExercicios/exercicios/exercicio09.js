/* Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.
*/

const prompt = require('prompt-sync')();

console.log("Exercício 09")
console.log("Soma e Multiplicação")

const num1 = Number(prompt("Informe o número 1: "));
const num2 = Number(prompt("Informe o número 2: "))

const resultado = (num1 + num2) * num1;

console.log("Resultado: ", resultado);