const mongoose = require('mongoose')

function validarId(req, res, next) {
    const isValid = mongoose.Types.ObjectId.isValid(req.params.id)
    if (isValid) {
        next()
    } else {
        res.status(400).json({ mensagem: "Id Inválido" })
    }
}

module.exports = {
    validarId
}
