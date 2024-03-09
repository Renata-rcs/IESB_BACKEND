/* Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
OBS: V = PI * Raio^2 * Altura
*/

let prompt = require('prompt-sync')();

var raio = parseFloat(prompt("Informe o raio da caixa d'água (em metros): "));
var altura = parseFloat(prompt("Informe a altura da caixa d'água (em metros): "));

const pi = Math.PI;

var volume = pi * Math.pow(raio, 2) * altura; // Math.pow faz a conta da potencia raio = valor do raio, e o 2 siginifica a qual número de potência foi elevado (raio, 2)

console.log("O volume da caixa d'água é: ", volume.toFixed(2), "metros cúbicos.");