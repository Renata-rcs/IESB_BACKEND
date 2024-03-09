/*. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.
*/

let prompt = require('prompt-sync')();

var qtdCarrosVendidos = parseInt(prompt("Informe a quantidade de carros vendidos no mês atual: "));
var valorTotalVendas = parseFloat(prompt("Informe o valor total de suas vendas no mês atual: "));
var salarioFixo = parseFloat(prompt("Informe o valor do seu salário fixo: "));
var comissaoUnitariaCarroVendido = parseFloat(prompt("Informe o valor da comissão recebida por cada carro vendido: "));

var comissaoTotalCarros = comissaoUnitariaCarroVendido * qtdCarrosVendidos;

var comissaoTotalVendas = valorTotalVendas * (5 / 100); 

var salarioFinal = salarioFixo + comissaoTotalCarros + comissaoTotalVendas;

console.log("O salário final será de : " + salarioFinal.toFixed(2) + " R$."); 