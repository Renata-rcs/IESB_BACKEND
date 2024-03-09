/* Escreva um script para ler o número total de eleitores de um município,
o número de votos brancos, nulos e válidos. Calcular e escrever o percentual 
que cada um representa em relação ao total de eleitores.
*/
let prompt = require('prompt-sync')();

var tEleitores = Number(prompt("Número total de eleitores: "));
var vBrancos = Number(prompt("Número de votos brancos: "));
var vNulos = Number(prompt("Número de votos nulos: "));
var vValidos = Number(prompt("Número de votos válidos: "));

if (isNaN(tEleitores) || isNaN(vBrancos) || isNaN(vNulos) || isNaN(vValidos)) {
    console.log("Por favor, insira valores numéricos para as informações dos votos.");
} else {
    const pBrancos = (vBrancos / tEleitores) * 100;
    const pNulos = (vNulos / tEleitores) * 100; // Aqui estava com o nome errado
    const pValidos = (vValidos / tEleitores) * 100;

    console.log(`Percentual de votos brancos: ${pBrancos.toFixed(2)}%.`);
    console.log(`Percentual de votos nulos: ${pNulos.toFixed(2)}%.`);
    console.log(`Percentual de votos válidos: ${pValidos.toFixed(2)}%.`);
}
