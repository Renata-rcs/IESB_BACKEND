const yup = require('yup')

const clienteSchema = yup.object().shape({
    nome: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    cpf: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    telefone: yup
            .string('campo precisa ser uma texto')
            .required('campo obrigatório'),
    email: yup
        .string('campo precisa ser uma texto')
        .email('E-mail inválido')
        .required('campo obrigatório')
     //endereco: yup
    //    .object('Campo precisa ser um texto'),
})

function clienteValidador(req, res, next) {
    clienteSchema
        .validate(req.body, { abortEarly: false })
            .then(() => next())
            .catch(err => {
                const errors = err.inner.map(e => {
                    const erro = {
                        campo: e.path,
                        erros: e.errors
                    }
                    return erro
                })
                res.status(400).json(
                    {
                        mensagem: "Falha na validação dos campos",
                        erros: errors
                    }
                )
            })
}

module.exports = {
    clienteValidador
}