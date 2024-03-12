/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.
*/

const prompt = require('prompt-sync')();

const  custoFabrica = parseFloat(prompt("Informe o custo de fábrica do carro: "));
const  percentualDistribuidor = 28 / 100; 
const  percentualImpostos = 45 / 100; 


const valorDistribuidor = custoFabrica * percentualDistribuidor;
const  valorImpostos = custoFabrica * percentualImpostos;


const  custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

console.log("O custo final será de R$" + custoFinal.toFixed(2));