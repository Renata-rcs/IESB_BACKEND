/* Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.
*/

let prompt = require('prompt-sync')();

var num1;
var num2;


do {
    num1 = parseFloat(prompt("Informe o número 1: "));
    if (isNaN(num1)) {
        console.log("Por favor, insira um valor numérico para o número 1.");
    }
} while (isNaN(num1));


do {
    num2 = parseFloat(prompt("Informe o número 2: "));
    if (isNaN(num2)) {
        console.log("Por favor, insira um valor numérico para o número 2.");
    }
} while (isNaN(num2));

var resultado = (num1 + num2) * num1;

console.log("Resultado: ", resultado);