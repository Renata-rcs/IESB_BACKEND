/* Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
OBS: V = PI * Raio^2 * Altura
*/

const prompt = require('prompt-sync')();

console.log("Exercício 08")
console.log("Calcular o volume de uma caixa d'água cilíndrica")

const raio = Number(prompt("Informe o raio da caixa d'água (em metros): "));
const altura = Number(prompt("Informe a altura da caixa d'água (em metros): "));

const pi = Math.PI;

const volume = pi * Math.pow(raio, 2) * altura; // Math.pow faz a conta da potencia raio = valor do raio, e o 2 siginifica a qual número de potência foi elevado (raio, 2)

console.log("O volume da caixa d'água é: ", volume.toFixed(2), "metros cúbicos.");