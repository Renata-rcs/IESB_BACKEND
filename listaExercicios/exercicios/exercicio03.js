/*Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.
*/

let prompt = require('prompt-sync')();

var salarioAtual;
var percetualReajuste;

do {
    salarioAtual = parseFloat(prompt("Informe seu salário atual: "));
    if (isNaN(salarioAtual)) {
        console.log("Por favor, insira um valor numérico para o salário atual.");
    }
} while (isNaN(salarioAtual));

do {
    percetualReajuste = parseFloat(prompt("Informe o percentual de reajuste: "));
    if (isNaN(percetualReajuste)) {
        console.log("Por favor, insira um valor numérico para o percentual de reajuste.");
    }
} while (isNaN(percetualReajuste));

var salarioReajustado = salarioAtual + (salarioAtual * (percetualReajuste / 100));

console.log("Seu salário mensal com o reajuste será de: " + salarioReajustado.toFixed(2) + " R$.");