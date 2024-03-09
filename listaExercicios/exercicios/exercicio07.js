/*Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.
*/

let prompt = require('prompt-sync')();

var nota1;
var nota2;

// Solicitar nota 1 até que um valor numérico válido seja inserido
do {
    nota1 = parseFloat(prompt("Informe a nota 1: "));
    if (isNaN(nota1)) {
        console.log("Por favor, insira um valor numérico para a nota 1.");
    }
} while (isNaN(nota1));

// Solicitar nota 2 até que um valor numérico válido seja inserido
do {
    nota2 = parseFloat(prompt("Informe a nota 2: "));
    if (isNaN(nota2)) {
        console.log("Por favor, insira um valor numérico para a nota 2.");
    }
} while (isNaN(nota2));

var pesoNota1 = 4;
var pesoNota2 = 6;
var mediaFinal = (nota1 * pesoNota1 + nota2 * pesoNota2) / (pesoNota1 + pesoNota2);

console.log("Média final: ", mediaFinal);