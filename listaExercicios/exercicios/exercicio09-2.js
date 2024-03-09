/* Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.
*/

let prompt = require('prompt-sync')();

var num1 = Number(prompt("Informe o número 1: "));
var num2 = Number(prompt("Informe o número 2: "))

var resultado = (num1 + num2) * num1;

console.log("Resultado: ", resultado);