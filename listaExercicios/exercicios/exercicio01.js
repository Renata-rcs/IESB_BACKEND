/* Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média 
aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou 
a mensagem de reprovado para média inferior a 7.0.
*/
let prompt = require('prompt-sync')();

var nota1 = Number(prompt("Nota 1: "));
var nota2 = Number(prompt("Nota 2: "));
var nota3 = Number(prompt("Nota 3: "));
var nota4 = Number(prompt("Nota 4: "));


if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    console.log("Por favor, insira valores numéricos para as notas.");
} else {
   
    var media = (nota1 + nota2 + nota3 + nota4) / 4;

   
    if (media >= 7) {
        console.log("Aprovado, média:", media);
    } else {
        console.log("Reprovado, média:", media);
    }
}