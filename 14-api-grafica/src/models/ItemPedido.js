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
        pedido: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'pedido',
            required: false
        },
        produto: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'produto',
            required: false
        }
    },
    {
        timestamps: true
    }
)

const ItemPedido = mongoose.model('ItemPedido', schema)

module.exports = ItemPedido