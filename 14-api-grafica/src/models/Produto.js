const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            requirid: true
        },
        quantidade: {
            type: Number,
            required: true
        },
        medida: {
            type: String,
            required: true
        },
        peso: {
            type: String,
            required: true
        },
        valorUnitario: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Produto = mongoose.model('produto', schema)

module.exports = Produto