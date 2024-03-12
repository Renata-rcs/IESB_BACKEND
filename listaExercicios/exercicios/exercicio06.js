/*. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.
*/

const prompt = require('prompt-sync')();

console.log("Exercício 06")
console.log("Calculo do salário final do vendedor")

const qtdCarrosVendidos = Number(prompt("Informe a quantidade de carros vendidos no mês atual: "));
const valorTotalVendas = Number(prompt("Informe o valor total de suas vendas no mês atual: "));
const salarioFixo = Number(prompt("Informe o valor do seu salário fixo: "));
const comissaoUnitariaCarroVendido = Number(prompt("Informe o valor da comissão recebida por cada carro vendido: "));

const comissaoTotalCarros = comissaoUnitariaCarroVendido * qtdCarrosVendidos;

const comissaoTotalVendas = valorTotalVendas * (5 / 100); 

const salarioFinal = salarioFixo + comissaoTotalCarros + comissaoTotalVendas;

console.log("O salário final será de R$: " + salarioFinal.toFixed(2)); 