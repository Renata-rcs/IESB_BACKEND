const server = require('http')

let contador = 0

server.createServer((req, res) =>{ //cria um servidor.

    contador++ 
    console.log("Contador de requisições " + contador)//contando toda vez que foi requisitado no browser, e sempre será contado de dois em dois (escreve a respota pro usúario, e manda a resposta que foi imprimido)
    res.write("Bem vindo ao meu backend! Contador de requisições " + contador)
    res.end()

}).listen(3000) //escutar na porta 3000.