const express = require('express')
const app = express()
const port = 3000

// Middleware -> intermediario
app.use('/', (req, res, next)=>{
    console.log("Passou no intermediario")
    console.log("Data: " + Date.now())
    next()
})

app.use(express.json())

//
app.get('/', (req, res)=>{
    res.send("Hello World")
})


app.post('/aluno', (req, res)=>{
    console.log(req.body)
    res.send("ok")
})

app.listen(port, ()=>{
    console.log("Aplicação iniciaada em http://localhost:3000")
})
