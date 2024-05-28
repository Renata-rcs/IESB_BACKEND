const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        dataPedido: {
            type: Date,
            required: true
        },
        previsaoEntrega: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        produto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'produto',
            required: false
        },
        valor: {
            type: Number,
            required: true
        },
        servico: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'servico',
            required: false
        },
        cliente: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'cliente',
            required: false 
        }

    },
    {
        timestamps: true
    }
)


const Pedido = mongoose.model('pedido', schema)

module.exports = Pedido;
