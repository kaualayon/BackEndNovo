const express = require('express');
const mongoose = require('mongoose');
const Book = require('../models/book'); // Importa o modelo Book para interagir com a coleção de livros no MongoDB
const multer = require('multer');
const router = express.Router(); // Inicializa o roteador para definir as rotas da API

// Configuração do Multer para tratar o upload de arquivos de imagem
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Define a pasta onde as imagens serão armazenadas
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Garante que o nome do arquivo seja único com a data atual
    }
});

const upload = multer({ storage: storage }); // Cria o middleware para upload usando a configuração definida

// Rota POST (Criação de livro) - Adiciona um novo livro à coleção
router.post('/', upload.single('image'), async (req, res) => {
    const { title, author, year, ISBN } = req.body; // Extrai os dados do corpo da requisição
    try {
        // Salva o caminho da imagem enviada no banco de dados
        const image = req.file.path;

        const newBook = new Book({ title, author, year, ISBN, image }); // Cria uma instância do livro com os dados recebidos
        await newBook.save(); // Salva o livro no banco de dados
        res.status(201).json({ message: 'Livro cadastrado com sucesso', book: newBook }); // Responde com o livro cadastrado
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o livro', error }); // Responde com erro caso ocorra algum problema
    }
});

// Rota GET (Leitura de livros) - Retorna todos os livros cadastrados
router.get('/', async (req, res) => {
    try {
        const books = await Book.find(); // Busca todos os livros no banco de dados
        res.status(200).json(books); // Retorna a lista de livros
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os livros', error }); // Caso haja erro, retorna a mensagem de erro
    }
});

// Rota GET (Leitura com filtro) - Permite buscar livros por título
router.get('/title', async (req, res) => {
    const { title } = req.query; // Obtém o parâmetro "title" da query string

    if (!title) {
        // Caso o título não tenha sido informado, retorna um erro
        return res.status(400).json({ message: 'O parâmetro "title" é necessário para a busca.' });
    }

    try {
        // Realiza a busca por títulos que contenham o valor informado, sem diferenciar maiúsculas e minúsculas
        const books = await Book.find({
            title: { $regex: title, $options: 'i' } // 'i' para permitir busca insensível a maiúsculas/minúsculas
        });

        // Caso não encontre nenhum livro com o título informado
        if (books.length === 0) {
            return res.status(404).json({ message: 'Nenhum livro encontrado com esse título.' });
        }

        // Retorna os livros encontrados
        res.status(200).json(books);
    } catch (error) {
        // Retorna erro caso haja falha na consulta ao banco de dados
        res.status(500).json({ message: 'Erro ao buscar os livros', error });
    }
});

// Rota PUT (Atualização de livro) - Atualiza os dados de um livro existente
router.put('/:id', upload.single('image'), async (req, res) => {
    const { title, author, year, ISBN } = req.body; // Extrai os dados do corpo da requisição

    const updateData = {}; // Cria um objeto para armazenar os dados a serem atualizados

    // Preenche o objeto de atualização com os dados fornecidos na requisição
    if (title) updateData.title = title;
    if (author) updateData.author = author;
    if (year) updateData.year = year;
    if (ISBN) updateData.ISBN = ISBN;

    // Se uma nova imagem for enviada, atualiza o campo de imagem
    if (req.file) {
        updateData.image = req.file.path;
    }

    try {
        // Atualiza o livro usando o ID fornecido na URL e os dados recebidos na requisição
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id, // ID do livro a ser atualizado
            updateData, // Dados a serem atualizados
            { new: true } // Retorna o livro atualizado
        );

        if (!updatedBook) {
            // Se o livro não for encontrado, retorna erro
            return res.status(404).json({ message: 'Livro não encontrado com esse ID' });
        }

        // Retorna o livro atualizado
        res.status(200).json(updatedBook);
    } catch (error) {
        // Caso haja erro ao atualizar o livro, retorna erro
        res.status(500).json({ message: 'Erro ao atualizar livro', error });
    }
});

// Rota DELETE (Exclusão de livro) - Exclui um livro com base no ISBN
router.delete('/isbn/:isbn', async (req, res) => {
    const { isbn } = req.params; // Obtém o ISBN do livro a ser excluído

    try {
        const deletedBook = await Book.findOneAndDelete({ ISBN: isbn }); // Tenta encontrar e excluir o livro pelo ISBN
        if (!deletedBook) {
            // Se o livro não for encontrado, retorna erro
            return res.status(404).json({ message: 'Livro não encontrado com esse ISBN' });
        }
        // Retorna confirmação da exclusão
        res.status(200).json({ message: 'Livro deletado com sucesso', book: deletedBook });
    } catch (error) {
        // Caso ocorra um erro ao tentar excluir o livro, retorna erro
        res.status(500).json({ message: 'Erro ao tentar deletar o livro', error });
    }
});

module.exports = router;
