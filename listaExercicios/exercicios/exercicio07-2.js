/*Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.
*/

let prompt = require('prompt-sync')();

var nota1 = parseFloat(prompt("Informe a nota 1: "));
var nota2 = parseFloat(prompt("Informe a nota 2: "));

var pesoNota1 = 4;
var pesoNota2 = 6;
var mediaFinal = (nota1 * pesoNota1 + nota2 * pesoNota2) / (pesoNota1 + pesoNota2);

console.log("Média final: ", mediaFinal);