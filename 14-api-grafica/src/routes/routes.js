const express = require('express')
const router = express.Router()

// Controllers
const ClienteController = require('../controllers/ClienteController')
const FuncionarioController = require('../controllers/FuncionarioController')
const ServicoController = require('../controllers/ServicoController')
const PedidoController = require('../controllers/PedidoController')
const ProdutoController = require('../controllers/ProdutoController')


// Validators
const { validarId } = require('../validators/IdValidator')
const { funcionarioValidador } = require('../validators/FuncionarioValidator')
const { clienteValidador } = require('../validators/ClienteValidator')
const { pedidoValidador } = require('../validators/PedidoValidator')
const { produtoValidador } = require('../validators/ProdutoValidator')
const { servicoValidador } = require('../validators/ServicoValidator')



// Rotas para Cliente
router.post('/clientes', clienteValidador, ClienteController.create)
router.get('/clientes', ClienteController.getAll)
router.get('/clientes/:id', validarId, ClienteController.getById)
router.put('/clientes/:id', validarId, clienteValidador, ClienteController.update)
router.delete('/clientes/:id', validarId, ClienteController.remove)

// Rotas para Funcionário
router.post('/funcionarios', funcionarioValidador, FuncionarioController.create)
router.get('/funcionarios', FuncionarioController.getAll)
router.get('/funcionarios/:id', validarId, FuncionarioController.getById)
router.put('/funcionarios/:id', validarId, funcionarioValidador, FuncionarioController.update)
router.delete('/funcionarios/:id', validarId, FuncionarioController.remove)

// Rotas para Servico
router.post('/servicos', servicoValidador, ServicoController.create)
router.get('/servicos', ServicoController.getAll)
router.get('/servicos/:id', validarId, ServicoController.getById)
router.put('/servicos/:id', validarId, servicoValidador, ServicoController.update)
router.delete('/servicos/:id', validarId, ServicoController.remove)

// Rotas para Pedido
router.post('/pedidos', pedidoValidador, PedidoController.create)
router.get('/pedidos', PedidoController.getAll)
router.get('/pedidos/:id', validarId, PedidoController.getById)
router.put('/pedidos/:id', validarId, pedidoValidador, PedidoController.update)
router.delete('/pedidos/:id', validarId, PedidoController.remove)

// Rotas para Produto
router.post('/produtos', produtoValidador, ProdutoController.create)
router.get('/produtos', ProdutoController.getAll)
router.get('/produtos/:id', validarId, ProdutoController.getById)
router.put('/produtos/:id', validarId, produtoValidador, ProdutoController.update)
router.delete('/produtos/:id', validarId, ProdutoController.remove)



module.exports = router
