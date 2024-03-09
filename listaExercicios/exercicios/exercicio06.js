/*. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.
*/

let prompt = require('prompt-sync')();

var qtdCarrosVendidos;
var valorTotalVendas;
var salarioFixo;
var comissaoUnitariaCarroVendido;


do {
    qtdCarrosVendidos = parseInt(prompt("Informe a quantidade de carros vendidos no mês atual: "));
    if (isNaN(qtdCarrosVendidos)) {
        console.log("Por favor, insira um valor numérico para a quantidade de carros vendidos.");
    }
} while (isNaN(qtdCarrosVendidos));


do {
    valorTotalVendas = parseFloat(prompt("Informe o valor total de suas vendas no mês atual: "));
    if (isNaN(valorTotalVendas)) {
        console.log("Por favor, insira um valor numérico para o valor total de vendas.");
    }
} while (isNaN(valorTotalVendas));


do {
    salarioFixo = parseFloat(prompt("Informe o valor do seu salário fixo: "));
    if (isNaN(salarioFixo)) {
        console.log("Por favor, insira um valor numérico para o salário fixo.");
    }
} while (isNaN(salarioFixo));

do {
    comissaoUnitariaCarroVendido = parseFloat(prompt("Informe o valor da comissão recebida por cada carro vendido: "));
    if (isNaN(comissaoUnitariaCarroVendido)) {
        console.log("Por favor, insira um valor numérico para a comissão por carro vendido.");
    }
} while (isNaN(comissaoUnitariaCarroVendido));

var comissaoTotalCarros = comissaoUnitariaCarroVendido * qtdCarrosVendidos;
var comissaoTotalVendas = valorTotalVendas * (5 / 100); 

var salarioFinal = salarioFixo + comissaoTotalCarros + comissaoTotalVendas;

console.log("O salário final será de : " + salarioFinal.toFixed(2) + " R$.");