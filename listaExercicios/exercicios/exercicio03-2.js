/*Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.
*/

const  prompt = require('prompt-sync')();

console.log("Exercício 03")
console.log("Calcular reajuste salárial")

const salarioAtual = Number(prompt("Informe seu salário atual: "));
const percetualReajuste = Number(prompt("Informe o percentual de reajuste: "));

const salarioReajustado = salarioAtual + (salarioAtual * (percetualReajuste / 100));

console.log("Seu salário mensal com o reajuste será de: R$" + salarioReajustado.toFixed(2) );