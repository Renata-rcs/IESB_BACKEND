/* Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
OBS: V = PI * Raio^2 * Altura
*/

let prompt = require('prompt-sync')();

var raio;
var altura;

// Solicitar o raio até que um valor numérico válido seja inserido
do {
    raio = parseFloat(prompt("Informe o raio da caixa d'água (em metros): "));
    if (isNaN(raio)) {
        console.log("Por favor, insira um valor numérico para o raio.");
    }
} while (isNaN(raio));

// Solicitar a altura até que um valor numérico válido seja inserido
do {
    altura = parseFloat(prompt("Informe a altura da caixa d'água (em metros): "));
    if (isNaN(altura)) {
        console.log("Por favor, insira um valor numérico para a altura.");
    }
} while (isNaN(altura));

const pi = Math.PI;

var volume = pi * Math.pow(raio, 2) * altura;

console.log("O volume da caixa d'água é: ", volume.toFixed(2), "metros cúbicos.");