const yup = require('yup');

const itemPedidoSchema = yup.object().shape({
    nome: yup
        .string('O campo precisa ser uma texto')
        .required('Campo obrigatório'),
    descricao: yup
        .string('O campo precisa ser uma texto')
        .required('Campo obrigatório'),
    quantidade: yup
        .number('O campo precisa ser um número')
        .required('Campo obrigatório'),
    pedido: yup
        .string('O campo precisa ser uma string'),
    produto: yup
        .string('O campo precisa ser uma string')
});

function itemPedidoValidador(req, res, next) {
    itemPedidoSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => ({
                campo: e.path,
                erros: e.errors
            }));
            res.status(400).json({
                mensagem: "Falha na validação dos campos",
                erros: errors
            });
        });
}

module.exports = {
    itemPedidoValidador
};
