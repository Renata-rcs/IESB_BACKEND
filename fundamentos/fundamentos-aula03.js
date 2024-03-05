// Impressão de informação no terminal
console.log('Testando informação no terminal.')
console.error('Testando console erro.')
console.warn('Testando console warn.')

// Criando variaveis com var
var nome
nome = "Renata Carvalho"
nome = "Marcella ESter"

console.log("Imprimindo varialvel nome: ")
console.log(nome)

// let e const

// const (constante)
// criar uma variavel que não vai poder ser alterada.

/* const primeiroNome;
primeiroNome = "Renata Carvalho";
primeiroNome = "Alanis"

console.log(primeiroNome)*/

// let
// criar variaveis que podem ser alteradas.
let idade
idade = 20
idade = 30
idade = "Trinta"

console.log("Imprimindo o valor da varialvel idade(com let)")
console.log(idade)

// Tipos de dados
// string
let nomeCompleto = "Renata Carvalho "
nomeCompleto = 'Renata "Carvalho"de Souza'

let textoOla = "Olá " + nomeCompleto + " , Tudo bem com você?"

console.log(textoOla)

let textoOlaComTemplante = `Olá ${2+ 2}, tudo bem com você?`
console.log(textoOlaComTemplante)

// templante string
let nomeUsuario = "Alanis Carvalho"
let idade2 = 30
let curso = "ADS Analise e Desenvolvimeto de Sistemas"

let pessoaOlaComTemplante = `
Olá ${nomeUsuario}, 
Seu idade é ${idade2},
Seu curso é ${curso}.ADS`

console.log(pessoaOlaComTemplante)

// Verificar o tipo de uma variavel
console.log("Verificando o tipo da variavel idade")
console.log(typeof idade2)

// Tipo number
let numeroInterio = 2000
let numeroNegativo = -60
let numeroFlutuante = 25.90

// Tipo array
let lista = []
//let listaCheia = ["Fiant", "Honda"]
//let listaCheiaMisturad = [1, "Honda", 2, "Renata"]

console.log(lista)

lista.push("PrimeiroIttem") //adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

console.log(lista)

lista.pop()
 
console.log(lista)

// Boolean
true
false

// Tipo Object(tipo objeto)
let objetoPessoa = {
    nome: "Keila",
    idade: 41,
    curso: "ADS",
    semestre: "1/2024"

}
console.log("Imprimendo objeto pessoa: ")
console.log(objetoPessoa)
console.log(typeof objetoPessoa)
console.log(`Olá ${objetoPessoa.nome},`)

// Tipo null
let telefone = null // ausência de valor

//Tipo undefined e NaN
let teste = 10/ "Olá"
console.log(teste)

// Tratamento de dados

// .length (quantidade de caracteres)
let texto = "Renata Carvalho"
console.log(texto.length)

// .toUpperCase (Transforma toda texto em maiusculo)
console.log(texto.toUpperCase())

// .toLowerCase (Transforma o texto em letra minuscula)
console.log(texto.toLocaleLowerCase())

// .replace (substituição)
let valor = "10,50,"
console.log(valor)

valor = valor.replace(",", ".")
console.log(valor)


// Tratamento de dados do tipo (number)
let numero = 10.777777
// .tofixed() (numero de casa do numero flutuante)
console.log(numero.toFixed(2))

// transformando para numero inteiro
console.log(Number.parseInt(numero))

let numeroInteiro = 10

// transformando para numero float
console.log(Number.parseFloat(numeroInteiro).toFixed(2))


let valorEmbolar = 10.
// em Reais
console.log(valorEmbolar.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))
// em Dolar
console.log(valorEmbolar.toLocaleString('pt-br', {style: 'currency', currency: 'USD'}))

let idadeUser = "20"
console.log(Number(idadeUser))

// Operadores Aritméticos
// calcular potência 2 ** 2

//Math.pow()
Math.PI
console.log(Math.PI)






