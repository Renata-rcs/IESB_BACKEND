const yup = require('yup')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

const usuarioSchema = yup.object().shape({
    nome: yup
        .string('Campo precisa ser um texto')
        .required('Campo obrigatorio'),
    email: yup
        .string('Campo precisa ser um texto')
        .email('E-mail é inválido')
        .required('Campo obrigatorio'),
    senha: yup
    .string('Campo precisa ser um texto')
    .required('Campo obrigatorio'),
})

function usuarioValidador(req, res, next) {
    usuarioSchema
    .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const erros = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.erros
                }
                return erro
            })
            res.status(400).json(
                {
                    mensagem: "Falha na validação dos campos",
                    erros: erros
                }
            )
        })

}

const loginSchema = yup.object().shape({
    email: yup
        .string('Campo precisa ser um texto')
        .email('E-mail é inválido')
        .required('Campo obrigatorio'),
    senha: yup
        .string('Campo precisa ser um texto')
    .required('Campo obrigatorio'),
})

async function loginValidador(req, res, next) {
    loginSchema
    .validate(req.body, { abortEarly: false })
    .then(() => next())
    .catch(err => {
        const erros = err.inner.map(e => {
            const erro = {
                campo: e.path,
                erros: e.erros
            }
            return erro
        })
        res.status(400).json(
            {
                mensagem: "Falha na validação dos campos",
                erros: erros
            }
        )

    })
}


async function checarToken(req, res, next) {
    try{
        const authorizationHeadres = req.get('Authorization')
        const separator = authorizationHeadres.split(' ')
        const token = separator[1]

        jwt.verify(token, JWT_SECRET)
        next()
    }catch (error) {
        return res.status(401).json({mensagem: "Token inválido"})
    }
}

module.exports = {
    usuarioValidador,
    loginValidador,
    checarToken
}