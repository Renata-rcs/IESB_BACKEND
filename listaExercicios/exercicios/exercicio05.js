/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor.
*/

let prompt = require('prompt-sync')();

var custoFabrica;
var percentualDistribuidor;
var percentualImpostos;


do {
    custoFabrica = parseFloat(prompt("Informe o custo de fábrica do carro: "));
    if (isNaN(custoFabrica)) {
        console.log("Por favor, insira um valor numérico para o custo de fábrica.");
    }
} while (isNaN(custoFabrica));


do {
    percentualDistribuidor = parseFloat(prompt("Informe o percentual de impostos do distribuidor: "));
    if (isNaN(percentualDistribuidor)) {
        console.log("Por favor, insira um valor numérico para o percentual do distribuidor.");
    }
} while (isNaN(percentualDistribuidor));


do {
    percentualImpostos = parseFloat(prompt("Informe o percentual de impostos sobre o valor do custo: "));
    if (isNaN(percentualImpostos)) {
        console.log("Por favor, insira um valor numérico para o percentual de impostos.");
    }
} while (isNaN(percentualImpostos));

var valorDistribuidor = custoFabrica * (percentualDistribuidor / 100);
var valorImpostos = custoFabrica * (percentualImpostos / 100);

var custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

console.log("O custo final será de " + custoFinal.toFixed(2) + " R$.");