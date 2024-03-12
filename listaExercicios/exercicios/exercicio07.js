/*Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.
*/

const prompt = require('prompt-sync')();

console.log("Exercício 07")
console.log("Calcular média final do aluno")


const nota1 = Number(prompt("Informe a nota 1: "));
const nota2 = Number(prompt("Informe a nota 2: "));

const pesoNota1 = 4;
const pesoNota2 = 6;
const mediaFinal = (nota1 * pesoNota1 + nota2 * pesoNota2) / (pesoNota1 + pesoNota2);

console.log("Média final: ", mediaFinal);