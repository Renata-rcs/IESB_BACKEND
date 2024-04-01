const express = require('express')
const app = express()
const port = 3000

// Middleware -> intermediario
app.use(express.json())

app.get('/hello', (req, res) => {
    res.send("HELLO")
})

// Logica entrando com os exercicios

// 1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
// PATH PARAM
app.get('/exercicio1/:qdtMinina/:qtdMaxima', (req, res) =>{
    const quantidadeMinima = Number(req.params.qdtMinina)
    const quantidadeMaxima = Number(req.params.qtdMaxima)
    
    const estoqueMedia = (quantidadeMaxima + quantidadeMinima) / 2

    res.send(`Estoque média: ${estoqueMedia}`)
})


// QUERY PARAM
app.get('/exercicio1', (req, res) =>{
    console.log(req.query)
    const qtdMinima = Number(req.query.qtdMinima)
    const qtdMaxima = Number(req.query.qtdMaxima)
    console.log(qtdMinima + qtdMaxima)
    const resultado = (qtdMinima + qtdMaxima) / 2
    console.log(resultado)
    res.send(`Estoque média: ${resultado}`)
})

// BODY
app.post('/exercicio1', (req, res) =>{
    const quantidadeMinima = req.body.qtdMinima
    const quantidadeMaxima = req.body.qtdMaxima

    const estoqueMedia = (quantidadeMinima + quantidadeMaxima) / 2
    
    res.send(`Estoque média: ${estoqueMedia}`)
    
})

// 2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. Escreva uma api que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento.

// PATH PARAM
app.get('/exercicio2/:salFixo', (req, res) => {
    const salarioFixo = Number(req.params.salFixo);
    const salarioFinal = (salarioFixo / 100 * 30) + salarioFixo;
    
        if (salarioFixo > 1000) {
            console.log("Você não tem direito ao reajuste")
            res.send("Você não tem direito ao reajuste");
        } else {
            console.log("Salário reajustado: R$" + salarioFinal)
            res.send("Salário reajustado: R$" + salarioFinal);
    }
});

// QUERY PARAM
app.get('/exercicio2', (req, res) => {
    const salarioFixo = Number(req.query.salFixo);
    const salarioFinal = (salarioFixo / 100 * 30) + salarioFixo;
    
    if (salarioFixo > 1000) {
        console.log("Você não tem direito ao reajuste")
        res.send("Você não tem direito ao reajuste");
    } else {
        console.log("Salário reajustado: R$" + salarioFinal)
        res.send("Salário reajustado: R$" + salarioFinal);
    }
});


// BODY
app.post('/exercicio2', (req, res) =>{
    const salarioFixo = req.body.salFixo;
    const salarioFinal = (salarioFixo / 100 * 30) + salarioFixo;
    
    if (salarioFixo > 1000) {
        console.log("Você não tem direito ao reajuste")
        res.send("Você não tem direito ao reajuste");
    } else {
        console.log("Salário reajustado: R$" + salarioFinal)
        res.send("Salário reajustado: R$" + salarioFinal);
    }
});

// 3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele efetuadas e o percentual que ganha sobre o total de vendas. Calcular o salário total do vendedor. Escrever o nome do vendedor e seu salário total.

// PATH PARAM
app.get('/exercicio3/:nome/:salFixo/:tVendasMes/:pTVendas', (req, res) =>{
    const nome = req.params.nome
    const salarioFixo = Number(req.params.salFixo)
    const totalVendasMes = Number(req.params.tVendasMes)
    const percentualTotalVendas = Number(req.params.pTVendas)

    const salarioTotal = (totalVendasMes / 100 * percentualTotalVendas) + salarioFixo
    console.log(nome + ", seu salario total será de R$" + salarioTotal)
    res.send(`${nome}, seu salario total será de R$${salarioTotal}`)
});

// QUERY PARAM
app.get('/exercicio3', (req, res) =>{
    const nome = req.query.nome
    const salarioFixo = Number(req.query.salFixo)
    const totalVendasMes = Number(req.query.tVendasMes)
    const percentualTotalVendas = Number(req.query.pTVendas)

    const salarioTotal = (totalVendasMes / 100 * percentualTotalVendas) + salarioFixo
    console.log(nome + ", seu salario total será de R$" + salarioTotal)
    res.send(`${nome}, seu salario total será de R$${salarioTotal}`)
});

// BODY
app.post('/exercicio3', (req, res) =>{
    const nome = req.body.nome
    const salarioFixo = req.body.salFixo
    const totalVendasMes = req.body.tVendasMes
    const percentualTotalVendas = req.body.pTVendas

    const salarioTotal = (totalVendasMes / 100 * percentualTotalVendas) + salarioFixo
    console.log(nome + ", seu salario total será de R$" + salarioTotal)
    res.send(`${nome}, seu salario total será de R$${salarioTotal}`)
});


// 4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas). O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h.

//PATH PARAM

app.get('/exercicio4/:nome/:dPercorrida/:tempo', (req, res) =>{
    const nome = req.params.nome;
    const distanciaPercorrida = Number(req.params.dPercorrida)
    const tempoGasto = Number(req.params.tempo)

    const velocidadeMedia = distanciaPercorrida / tempoGasto

    res.send(`A velocidade média do ${nome} foi ${velocidadeMedia} km/h.`)
});

// QUERY PARAM
app.get('/exercicio4', (req, res) =>{
    const nome = req.query.nome
    const distaciaPercorrida = Number(req.query.dPercorrida)
    const tempoGasto = Number(req.query.tempo)

    const velocidadeMedia = distaciaPercorrida / tempoGasto
    console.log(velocidadeMedia)
    res.send(`A velicidade média do ${nome} foi ${velocidadeMedia} km/h.`)
});

// BODY

app.post('/exercicio4', (req, res) =>{
    const nome = req.body.nome
    const distaciaPercorrida = req.body.dPercorrida
    const tempoGasto = req.body.tempo

    const velocidadeMedia = distaciaPercorrida / tempoGasto
    console.log(velocidadeMedia)
    res.send(`A velicidade média do ${nome} foi ${velocidadeMedia} km/h.`)
});


// 5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:
// Salários até 2.000, reajuste de 50%
// Salários maiores que 2.000, reajuste de 30%

// PATH PARAM
app.get('/exercicio5/:sal', (req, res) =>{
const salario = Number(req.params.sal)
    if(salario <= 2000){
        const reajuste = (salario / 100 * 50) + salario 
        res.send(`O salário reajustado será de R$${reajuste}.`)
    }
    else{
        const reajuste = (salario / 100 * 30) + salario 
        res.send(`O salário reajustado será de R$${reajuste}.`)
    }
});

// QUERY PARAM
app.get('/exercicio5', (req, res) =>{
    const salario = Number(req.query.sal)
        if(salario <= 2000){
            const reajuste = (salario / 100 * 50) + salario 
            res.send(`O salário reajustado será de R$${reajuste}.`)
        }
        else{
            const reajuste = (salario / 100 * 30) + salario 
            res.send(`O salário reajustado será de R$${reajuste}.`)
        }
});

// BODY
app.post('/exercicio5', (req, res) =>{
    const salario = req.body.sal
        if(salario <= 2000){
            const reajuste = (salario / 100 * 50) + salario 
            res.send(`O salário reajustado será de R$${reajuste}.`)
        }
        else{
            const reajuste = (salario / 100 * 30) + salario 
            res.send(`O salário reajustado será de R$${reajuste}.`)
        }
});

// 6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:
// peso ideal de homem = (72,7 x altura) – 58
// peso ideal da mulher = (62,1 x altura) – 44,7

// PATH PARAM
app.get('/exercicio6/:a/:s', (req, res) =>{
    const altura = Number(req.params.a)
    const sexo = req.params.s.toLowerCase() // Converte letras para minúsculas para facilitar a comparação

    if(sexo === 'homem'){
        const pesoIdeal = (72.2 * altura) - 58
        res.send(`Seu peso ideal é ${pesoIdeal.toFixed(2)} kg.`)
    } else if(sexo === 'mulher'){
        const pesoIdeal = (62.1 * altura) - 44.7
        res.send(`Seu peso ideal é ${pesoIdeal.toFixed(2)} kg.`)
    } else {
        res.send('Sexo inválido. Use "homem" ou "mulher".')
    }
});

// QUERY
app.get('/exercicio6', (req, res) =>{
    const altura = req.body.a
    const sexo = req.body.s.toLowerCase()
    if(sexo === 'homem'){
        const pesoIdeal = (72.2 * altura) - 58
        res.send(`Seu peso ideal é ${pesoIdeal.toFixed(2)} kg.`)
    } else if(sexo === 'mulher'){
        const pesoIdeal = (62.1 * altura) - 44.7
        res.send(`Seu peso ideal é ${pesoIdeal.toFixed(2)} kg.`)
    } else {
        res.send('Sexo inválido. Use "homem" ou "mulher".')
    }
});

// BODY
app.post('/exercicio6', (req, res) =>{
    const altura = req.query.a
    const sexo = req.query.s.toLowerCase()
    if(sexo === 'homem'){
        const pesoIdeal = (72.2 * altura) - 58
        res.send(`Seu peso ideal é ${pesoIdeal.toFixed(2)} kg.`)
    } else if(sexo === 'mulher'){
        const pesoIdeal = (62.1 * altura) - 44.7
        res.send(`Seu peso ideal é ${pesoIdeal.toFixed(2)} kg.`)
    } else {
        res.send('Sexo inválido. Use "homem" ou "mulher".')
    }
});


// 7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
// O maior preço lido; e
// A média aritmética dos preços dos produtos.

// PATH PARAM 

/*

   [
    {
        "nome": "Porcelanato",
        "codigo": 1,
        "preco": 20.36
    }
    ,
     {
        "nome": "Cimento",
        "codigo": 2,
        "preco": 10.36
    }
    ,
     {
        "nome": "Argamassa",
        "codigo": 3,
        "preco": 5.36
    }
    ,
     {
        "nome": "Ceramica",
        "codigo": 4,
        "preco": 30.00
    }
    ,
     {
        "nome": "Vaso",
        "codigo": 5,
        "preco": 99.50
    }
    ,
     {
        "nome": "Lampada",
        "codigo": 6,
        "preco": 7.99
    }
    ,
     {
        "nome": "Balde",
        "codigo": 7,
        "preco": 10.99
    }
    , {
        "nome": "Pá",
        "codigo": 8,
        "preco": 15.36
    }
    ,
     {
        "nome": "Pia",
        "codigo": 9,
        "preco": 99.90
    }
    ,
     {
        "nome": "Torneira",
        "codigo": 10,
        "preco": 57.50
    }
    ,
     {
        "nome": "Janela",
        "codigo": 11,
        "preco": 75.00
    }
    ,
     {
        "nome": "Porta",
        "codigo": 12,
        "preco": 20.00
    }
    ,
     {
        "nome": "Maçaneta",
        "codigo": 13,
        "preco": 69.99
    }
    ,
     {
        "nome": "Tanque",
        "codigo": 14,
        "preco": 57.99
    }
    ,
     {
        "nome": "Telha",
        "codigo": 15,
        "preco": 11.99
    }
    
]
*/

app.post('/exercicio7', (req, res) =>{
    const corpo = req.body
    let listaProdutos = []
    console.log(listaProdutos)
    
    corpo.forEach(produto => { // forEach percorre todo o array
        console.log(listaProdutos)
        listaProdutos.push(produto)
    });

    let soma = 0
    listaProdutos.forEach(produto =>{
        soma = soma + produto.preco
        
    })
    // usando metodo reduce
    //listaProdutos.reduce(produto => produto.preco)

    console.log(soma.toFixed(2))

    const media = soma / listaProdutos.length

    // calcular maior preço
    let maiorPreco = 0
    // logica
    listaProdutos.forEach(produto =>{
        if(produto.preco > maiorPreco){
            maiorPreco = produto.preco
        }
    })
    // usando o motodo math.max
    //Math.max(listaProdutos.map(produto => produto.preco))

    const resultado = {
        precoMedia : media.toFixed(2),
        maiorPreco : maiorPreco
    }
    console.log(resultado)
    res.json(resultado)

    
})

//8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. Faça uma api que leia o salário e o código do cargo de um funcionário e calcule o seu novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. Mostre o salário antigo, o novo salário e a diferença entre ambos.
// Código do Cargo -> Percentual:
// 101 -> 5%
// 102 -> 7,5%
// 103 -> 10%


// PATH PARAM
app.get('/exercicio8/:sal/:cargo', (req, res) =>{
    const salario = Number(req.params.sal)
    const cargo = Number(req.params.cargo)

    if(cargo == 101){
        const salarioReajustado = (salario / 100 * 5) + salario
        const diferenca = salarioReajustado - salario
        res.send(`Salário antigo: R$${salario} \nNovo salário: R$${salarioReajustado} \nDiferença entre ambos: R$${diferenca} `)
    }
    else if(cargo == 102){
        const salarioReajustado = (salario / 100 * 7.5) + salario
        const diferenca = salarioReajustado - salario
        res.send(`Salário antigo: R$${salario} \nNovo salário: R$${salarioReajustado} \nDiferença entre ambos: R$${diferenca} `)
    }
    else if(cargo == 103){
        const salarioReajustado = (salario / 100 * 10) + salario
        const diferenca = salarioReajustado - salario
        res.send(`Salário antigo: R$${salario} \nNovo salário: R$${salarioReajustado} \nDiferença entre ambos: R$${diferenca} `)
    }
    else{
        const salarioReajustado = (salario / 100 * 15) + salario
        const diferenca = salarioReajustado - salario
        res.send(`Salário antigo: R$${salario} \nNovo salário: R$${salarioReajustado} \nDiferença entre ambos: R$${diferenca} `)
    }
});

// QUERY PARAM
app.get('/exercicio8', (req, res) =>{
    const salario = Number(req.query.sal)
    const cargo = Number(req.query.cargo) 

    if(cargo == 101){
        const salarioReajustado = (salario / 100 * 5) + salario
        const diferenca = salarioReajustado - salario
        res.send(`Salário antigo: R$${salario} \nNovo salário: R$${salarioReajustado} \nDiferença entre ambos: R$${diferenca} `)
    }
    else if(cargo == 102){
        const salarioReajustado = (salario / 100 * 7.5) + salario
        const diferenca = salarioReajustado - salario
        res.send(`Salário antigo: R$${salario} \nNovo salário: R$${salarioReajustado} \nDiferença entre ambos: R$${diferenca} `)
    }
    else if(cargo == 103){
        const salarioReajustado = (salario / 100 * 10) + salario
        const diferenca = salarioReajustado - salario
        res.send(`Salário antigo: R$${salario} \nNovo salário: R$${salarioReajustado} \nDiferença entre ambos: R$${diferenca} `)
    }
    else{
        const salarioReajustado = (salario / 100 * 15) + salario
        const diferenca = salarioReajustado - salario
        res.send(`Salário antigo: R$${salario} \nNovo salário: R$${salarioReajustado} \nDiferença entre ambos: R$${diferenca} `)
    }
});

// BODY
app.post('/exercicio8', (req, res) =>{
    const salario = req.body.sal
    const cargo = req.body.cargo

    if(cargo == 101){
        const salarioReajustado = (salario / 100 * 5) + salario
        const diferenca = salarioReajustado - salario
        res.send(`Salário antigo: R$${salario} \nNovo salário: R$${salarioReajustado} \nDiferença entre ambos: R$${diferenca} `)
    }
    else if(cargo == 102){
        const salarioReajustado = (salario / 100 * 7.5) + salario
        const diferenca = salarioReajustado - salario
        res.send(`Salário antigo: R$${salario} \nNovo salário: R$${salarioReajustado} \nDiferença entre ambos: R$${diferenca} `)
    }
    else if(cargo == 103){
        const salarioReajustado = (salario / 100 * 10) + salario
        const diferenca = salarioReajustado - salario
        res.send(`Salário antigo: R$${salario} \nNovo salário: R$${salarioReajustado} \nDiferença entre ambos: R$${diferenca} `)
    }
    else{
        const salarioReajustado = (salario / 100 * 15) + salario
        const diferenca = salarioReajustado - salario
        res.send(`Salário antigo: R$${salario} \nNovo salário: R$${salarioReajustado} \nDiferença entre ambos: R$${diferenca} `)
    }
});



// 9. Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e a quantidade de horas extras trabalhadas. Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:

    //  Valor da hora trabalhada é igual a 1/5 do salário mínimo;
    // Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
    // Para cada dependente acréscimo de 32 reais;
    // Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
    // Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
    // Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
       // IRRF | Salário Bruto
       // Isento Inferior a 2.000
      // 10% De 2.000 a 5.000
      // 20% Superior a 5.000
    // Salário líquido é igual ao salário bruto menos IRRF;
    // A gratificação segue a próxima tabela:
         // Salário Líquido | Gratificações
         // Até 3.500 | 1.000 reais
         // Superior a 3.500 | 500 reais
    // Salário a receber do funcionário é igual ao salário líquido mais a gratificação.

// PATH PARAM
app.get('/exercicio9/:salminimo/:hTrabalhadas/:nDependentes/:hExtraTrabalhada', (req, res) =>{
    const salarioMinimo = Number(req.params.salminimo)
    const horaTrabalhada = Number(req.params.hTrabalhadas)
    const numeroDependentes = Number(req.params.nDependentes)
    const horasExtrasTrabalhadas = Number(req.params.hExtraTrabalhada)

    const valorHoraTrabalhada = salarioMinimo / 5
    const salarioMes = horaTrabalhada * valorHoraTrabalhada
    const dependente = numeroDependentes * 32
    const valorHoraExtra = valorHoraTrabalhada * 1.5; // 50% a mais que o valor da hora normal
    const salarioBruto = salarioMes + dependente + valorHoraExtra

    let irrf;
    if (salarioBruto <= 2000) {
        irrf = 0; // Isento
    } else if (salarioBruto > 2000 && salarioBruto <= 5000) {
        irrf = salarioBruto * 0.1; // 10%
    } else {
        irrf = salarioBruto * 0.2; // 20%
    }

    const salarioLiquido = salarioBruto - irrf;

    let gratificacao;
    if (salarioLiquido <= 3500) {
        gratificacao = 1000;
    } else {
        gratificacao = 500;
    }

    const salarioReceber = salarioLiquido + gratificacao;

    res.send(`Salário a receber do funcionário: R$ ${salarioReceber.toFixed(2)}`);
});


// QUERY PARAM
app.get('/exercicio9', (req, res) =>{
    const salarioMinimo = Number(req.query.salminimo)
    const horaTrabalhada = Number(req.query.hTrabalhadas)
    const numeroDependentes = Number(req.query.nDependentes)
    const horasExtrasTrabalhadas = Number(req.query.hExtraTrabalhada)

    const valorHoraTrabalhada = salarioMinimo / 5
    const salarioMes = horaTrabalhada * valorHoraTrabalhada
    const dependente = numeroDependentes * 32
    const valorHoraExtra = valorHoraTrabalhada * 1.5; // 50% a mais que o valor da hora normal
    const salarioBruto = salarioMes + dependente + valorHoraExtra

    let irrf;
    if (salarioBruto <= 2000) {
        irrf = 0; // Isento
    } else if (salarioBruto > 2000 && salarioBruto <= 5000) {
        irrf = salarioBruto * 0.1; // 10%
    } else {
        irrf = salarioBruto * 0.2; // 20%
    }

    const salarioLiquido = salarioBruto - irrf;

    let gratificacao;
    if (salarioLiquido <= 3500) {
        gratificacao = 1000;
    } else {
        gratificacao = 500;
    }

    const salarioReceber = salarioLiquido + gratificacao;

    res.send(`Salário a receber do funcionário: R$ ${salarioReceber.toFixed(2)}`);
});

// BODY
app.post('/exercicio9', (req, res) =>{
    const salarioMinimo = req.body.salminimo
    const horaTrabalhada = req.body.hTrabalhadas
    const numeroDependentes = req.body.nDependentes
    const horasExtrasTrabalhadas = req.body.hExtraTrabalhada

    const valorHoraTrabalhada = salarioMinimo / 5
    const salarioMes = horaTrabalhada * valorHoraTrabalhada
    const dependente = numeroDependentes * 32
    const valorHoraExtra = valorHoraTrabalhada * 1.5; // 50% a mais que o valor da hora normal
    const salarioBruto = salarioMes + dependente + valorHoraExtra

    let irrf;
    if (salarioBruto <= 2000) {
        irrf = 0; // Isento
    } else if (salarioBruto > 2000 && salarioBruto <= 5000) {
        irrf = salarioBruto * 0.1; // 10%
    } else {
        irrf = salarioBruto * 0.2; // 20%
    }

    const salarioLiquido = salarioBruto - irrf;

    let gratificacao;
    if (salarioLiquido <= 3500) {
        gratificacao = 1000;
    } else {
        gratificacao = 500;
    }

    const salarioReceber = salarioLiquido + gratificacao;

    res.send(`Salário a receber do funcionário: R$ ${salarioReceber.toFixed(2)}`);
});










app.listen(3000, ()=>{
    console.log("Aplicação iniciada em http://localhost:3000")
})