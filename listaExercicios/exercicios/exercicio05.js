/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor.
*/

const prompt = require('prompt-sync')();

console.log("Exercício 05")
console.log("Custo de um carro novo ao consumidor")

const custoFabrica = Number(prompt("Informe o custo de fábrica do carro: "));
const percentualDistribuidor = Number(prompt("Informe o percentual de impostos dsitribuidor: "));
const percentualImpostos = Number(prompt("Informe o percentual de Impostos sobre o valor do custo: "));


const valorDistribuidor = custoFabrica * (percentualDistribuidor / 100);
const valorImpostos = custoFabrica * (percentualImpostos / 100) ;


const custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

console.log("O custo final será de  R$" + custoFinal.toFixed(2));