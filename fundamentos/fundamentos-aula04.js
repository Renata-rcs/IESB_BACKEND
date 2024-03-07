// Condição
// if else

/*
if(condicao){
    acao
}

if(condicao){
    acao
}
else{
    acao
}


if(condicao){
    acao
}
if(condicao){
    acao
}
else{
    acao
}
*/

let nomeAluno = "Renata"
let idade = 20
let curso = "ADS"

//if(idade >= 18) {
//    console.log("Aluno é maior de idade.")
//}
//else{
//    console.log("Aluno é menor de idade")
//}

if(idade >= 18 && curso == "ADS") {
    console.log("Aluno válido")
}
if(nomeAluno == "Renata") {
    console.log("O nome é Renata")
}
if(idade >= 18){
    console.log("Aluno maior de idade")
}
if(curso == "ADS") {
    console.log("O curso deo aluno é ADS")
}


// Repitições LOOP

// laço for
// for(inicialização; condição; incremento)

for(let contador = 0; contador <= 10; contador = contador + 1 ) {
    console.log("Contador: ", contador)
    console.log("Loop")
    console.log("Teste")
    console.log("Testando")
}

/*
for(let i = 1; i <= 10; i = i++ ) {
    console.log(i)
    
}
*/

// função
// função sem parametros e sem retorno
function executa() {
    console.log("Executando função executa")
}
executa();

//função com paraemtros e sem retorno
console.log("Chamando a função antes de declarar")
soma(2,4)
function soma(numA, numB){
    console.log(numA + numB)
}
//soma(2, 2)
//soma(6, 4)

console.log("Chamando a função soma2 antes de declarar")
//soma2(2,8)

/*
//função variavel
const soma2 = function (numA, numB) {
    console.log(numA + numB)
}
soma2(2,10)
*/


/*
const soma2 = function (numA, numB) {
    return numA + numB
}
const resultado = soma2(2,1)
console.log("Resultado ", resultado)
*/

const mult = function (numA, numB) {
    return numA * numB
}
console.log("Chamando o multiplicador")
console.log(mult(10,20))


const mult1 = (numA, numB) => numA * numB
console.log("Chamando o multiplicador")
console.log(mult1(10,20))