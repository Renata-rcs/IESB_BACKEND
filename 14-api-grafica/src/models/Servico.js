const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        material: {
            type: String,
            required: false
        },
        categoria: {
            type: String,
            required: true
        },
        disponibilidade: {
            type: String,
            required: true
        },
        responsavel: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'funcionario',
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Servico = mongoose.model('servico', schema);

module.exports = Servico;
