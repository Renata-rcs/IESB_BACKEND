/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.
*/

let prompt = require('prompt-sync')();

var custoFabrica;
var percentualDistribuidor = 0.28; 
var percentualImpostos = 0.45; 


do {
    custoFabrica = parseFloat(prompt("Informe o custo de fábrica do carro: "));
    if (isNaN(custoFabrica)) {
        console.log("Por favor, insira um valor numérico para o custo de fábrica.");
    }
} while (isNaN(custoFabrica));

var valorDistribuidor = custoFabrica * percentualDistribuidor;
var valorImpostos = custoFabrica * percentualImpostos;

var custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

console.log("O custo final será de " + custoFinal.toFixed(2) + " R$.");