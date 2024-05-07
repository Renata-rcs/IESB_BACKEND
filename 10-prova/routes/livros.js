const express = require('express');
const router = express.Router();


let listaLivros = [
    {   
        id: 1,
        titulo: "A cabana",
        autor: "Flavio Rosa",
        editora: "Editora 1",
        ano: 2021,
        preco: 60.00
    },
    {   
        id: 2,
        titulo: "A arvore 2",
        autor: "Fabio Rosa",
        editora: "Editora 2",
        ano: 2022,
        preco: 80.00
    },

    {   
        id: 3,
        titulo: "A flor ",
        autor: "Fabio Rosa",
        editora: "Editora 2",
        ano: 2022,
        preco: 80.00
    },
];

// READ -> buscar todos os livros
router.get('/livros', (req, res) =>{
    res.json(listaLivros);
});

// READ -> Buscar livros pelo id
router.get('/livros/:id', (req, res) =>{
    const id = req.params.id;
    const livro = listaLivros.find(livro => livro.id == id);
    if(livro) {
        return res.json(livro);
    }
    return res.status(404).json({mensagem: "Livro não encontrado!"});
});

// CREATE -> Cadastrar livro
router.post('/livros', (req, res) =>{
    const corpo = req.body;

    if(!corpo.titulo || !corpo.autor || !corpo.editora || !corpo.ano || !corpo.preco) {
        return res.status(400).json({mensagem: "Campos titulo, autor, editora, ano e preco são obrigatórios!"});
    }

    const livro = {
        id: Math.round(Math.random() * 1000),
        titulo: corpo.titulo,
        autor: corpo.autor,
        editora: corpo.editora,
        ano: corpo.ano,
        preco: corpo.preco
    };

    listaLivros.push(livro);
    return res.status(201).json({
        mensagem: "Livro criado com sucesso!",
        livro
    });
});

// UPDATE -> Atualizar livro
router.put('/livros/:id', (req, res) => {
    const id = req.params.id
    const corpo = req.body

    if(!corpo.titulo || !corpo.autor || !corpo.editora || !corpo.ano || !corpo.preco) {
        return res.status(400).json({mensagem: "Campos titulo, autor, editora, ano e preco são obrigatórios!"})
    }

    const index = listaLivros.findIndex(livro => livro.id == id)
    if(index == -1) {
        return res.status(404).json({mensagem: "Livro não encontrado!"})
    }

    const livroAtualizado = {
        id: Number(id),
        titulo: corpo.titulo,
        autor: corpo.autor,
        editora: corpo.editora,
        ano: corpo.ano,
        preco: corpo.preco
        
    }

    listaLivros[index] = livroAtualizado

    return res.json({
        mensagem: "Livro atualizado com sucesso!",
        livroAtualizado
    })
})

// Delete -> Excluir livro pelo id
router.delete('/livros/:id', (req, res) =>{
    const id = req.params.id;
    const index = listaLivros.findIndex(livro => livro.id == id);
    if(index == -1) {
        return res.status(404).json({mensagem: "Not found!"});
    }
    listaLivros.splice(index, 1);
    res.json({mensagem: "Livro excluído com sucesso!"});
});

// READ -> Buscar livros do mesmo autor 
router.get('/livros/autor/:autor', (req, res) =>{
    const autor = req.params.autor.toUpperCase();
    const livrosPorMesmoAutor = listaLivros.filter(livro => livro.autor.toUpperCase() == autor);
    res.json(livrosPorMesmoAutor);
});

// READ -> calcular e retornar o preço médio de todos os livros da lista (GET /livros/preco/media)
router.get('/livros/preco/media', (req, res) =>{
    if (listaLivros.length === 0) {
        return res.status(404).json({ mensagem: "Não há livros na lista." });
    }

    const totalPrecos = listaLivros.reduce((total, livro) => total + livro.preco, 0);
    const precoMedio = totalPrecos / listaLivros.length;


    res.json({ preco_medio: precoMedio });
});


module.exports = router;
