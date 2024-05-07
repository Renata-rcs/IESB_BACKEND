const express = require('express')
const router = express.Router()

const ProdutoController = require('../controllers/Produto.Controller')


router.get('/', (req, res) =>{
    res.json("Ok")
})


// Rotas

router.get('/produtos', ProdutoController.getAll)
router.post('/produtos', ProdutoController.create)




module.exports = router