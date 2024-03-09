/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor.
*/

let prompt = require('prompt-sync')();

var custoFabrica = parseFloat(prompt("Informe o custo de fábrica do carro: "));
var percentualDistribuidor = parseFloat(prompt("Informe o percentual de impostos dsitribuidor: "));
var percentualImpostos = parseFloat(prompt("Informe o percentual de Impostos sobre o valor do custo: "));


var valorDistribuidor = custoFabrica * (percentualDistribuidor / 100);
var valorImpostos = custoFabrica * (percentualImpostos / 100) ;


var custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

console.log("O custo final será de " + custoFinal.toFixed(2) + " R$.");