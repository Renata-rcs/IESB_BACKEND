const yup = require('yup');

const pedidoSchema = yup.object().shape({
    dataPedido: yup
        .date('O campo precisa ser uma data')
        .required('Campo obrigatório'),
    previsaoEntrega: yup
        .date('O campo precisa ser uma data')
        .required('Campo obrigatório'),
    status: yup
        .string('O campo precisa ser uma texto')
        .required('Campo obrigatório'),
    formaPagamento: yup
        .string('O campo precisa ser uma texto')
        .required('Campo obrigatório'),
    valor: yup
        .number('O campo precisa ser um número')
        .required('Campo obrigatório'),
    responsavel: yup
        .string('O campo precisa ser uma string'),
    cliente: yup
        .string('O campo precisa ser uma string')
});

function pedidoValidador(req, res, next) {
    pedidoSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => ({
                campo: e.path,
                erros: e.errors
            }))
            res.status(400).json({
                mensagem: "Falha na validação dos campos",
                erros: errors
            })
        })
}

module.exports = {
    pedidoValidador
}
