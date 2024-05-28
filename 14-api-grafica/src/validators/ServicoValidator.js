const yup = require('yup');

const servicoSchema = yup.object().shape({
    nome: yup
        .string('O campo precisa ser uma texto')
        .required('Campo obrigatório'),
    descricao: yup
        .string('O campo precisa ser uma texto')
        .required('Campo obrigatório'),
    material: yup
        .string('O campo precisa ser um número')
        .required('Campo obrigatório'),
    categoria: yup
        .string('O campo precisa ser uma string')
        .required('Campo obrigatório'),
    disponibilidade: yup
        .string('O campo precisa ser uma string')
        .required('Campo obrigatório'),
    responsavel: yup
        .string('O campo precisa ser uma string')
});


function servicoValidador(req, res, next) {
   servicoSchema
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
    servicoValidador
};
