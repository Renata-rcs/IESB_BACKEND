/*Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.
*/

let prompt = require('prompt-sync')();

var salAtual = 0;
var perReajuste = 0;

var salarioAtual = parseFloat(prompt("Informe seu salário atual: "));
var percetualReajuste = parseFloat(prompt("Informe o percentual de reajuste: "));

var salarioReajustado = salarioAtual + (salarioAtual * (percetualReajuste / 100));

console.log("Seu salário mensal com o reajuste será de: " + salarioReajustado.toFixed(2) + " R$.");