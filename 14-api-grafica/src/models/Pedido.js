const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        dataPedido: {
            type: Date,
            required: true
        },
        previsaoEntrega: {
            type: Date,
            requirid: true
        },
        status: {
            type: String,
            required: true
        },
        formaPagamento: {
            type: String,
            required: true
        },
        valor: {
            type: Number,
            required: true
        },
        responsavel: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'funcionario',
            required: false
        },
        cliente: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'cliente',
            required: false 
        },
        itemPedido: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'itemPedido',
            required: false 
        }
       
    },
    {
        timestamps: true
    }
)

const Pedido = mongoose.model('pedido', schema)

module.exports = Pedido