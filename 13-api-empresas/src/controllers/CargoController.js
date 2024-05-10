const Cargo = require('../models/Cargo')
const CargoModel = require('../models/Cargo')


async function create(req, res) {
    try{
       const cargo = new Cargo(req.body)
       const cargoCriado = await cargo.save()
       res.status(201).json(cargoCriado)
    }
    catch (error) {
        console.error("Erro ao criar cargo: ", error)
        res.status(400).json({
            mensagem: "Erro ao criar cargo!",
            erro: error.mensage
        })
    }
}


async function getAll(req, res) {
    res.json(await Cargo.find())
}

async function getById(req, res) {
    const cargo = await Cargo.findById(req.params.id)
    if (cargo) {
        res.json(cargo)
    }
    else {
        res.status(404).json({monsagem: "Cargo não encontrado!"})
    }
}

async function update(req, res) {
    try {
        const cargoAtualizado = await Cargo.findByIdAndUpdate(req.params.id, req.body)
        res.json(cargoAtualizado)
    }
    catch (error) {
        console.log("Erro ao criar cargo: ", error)
        res.status(400).json({
            mensagem: "Erro ao Atualizar cargo!",
            erro: error.mensage
        })
    }
}

async function remove(req, res) {
    await Cargo.findByIdAndDelete(req.params.id)
    res.json({mensagem: "Excluido com sucesso!"})
}











module.exports = {
    create,
    getAll,
    getById,
    update,
    remove

} 
