const Book = require('../models/book');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const bcrypt = require('bcryptjs');
const path = require('path');

require("dotenv").config();

// Configuração do multer para armazenar a imagem
const upload = multer({ 
    dest: 'uploads/', // Diretório onde as imagens serão salvas
    limits: { fileSize: 10 * 1024 * 1024 }, // Limite de tamanho de arquivo (10 MB)
    fileFilter(req, file, cb) {
        // Filtra os tipos de arquivo permitidos (apenas imagens)
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Por favor, envie apenas arquivos de imagem.'));
        }
        cb(null, true);
    }
});

// Rota para adicionar um novo livro
router.post('/api/books/add', upload.single('image'), async (req, res) => {
    try {
        const { title, author, description, publicationYear, genre, isbn, availableCopies } = req.body;

        const image = req.file;

        const newBook = new Book({
            title,
            author,
            description,
            publicationYear,
            genre,
            isbn,
            availableCopies,
            imageUrl: image ? `/uploads/${image.filename}` : null, // Caminho da imagem salva
        });

        await newBook.save();
        
        res.status(201).json({ message: 'Livro adicionado com sucesso!', book: newBook });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar o livro', error });
    }
});

// Configuração para servir arquivos estáticos (imagens)
router.use('/uploads', express.static(path.join(__dirname, 'uploads')));


router.get('/api/books', async (req, res) => {
    try {
        const books = await Book.find(); // Substitua pelo método do seu banco de dados para buscar todos os livros
        res.status(200).json(books);
    } catch (error) {
        console.error("Erro ao buscar livros:", error);
        res.status(500).json({ message: 'Erro ao buscar livros', error });
    }
});



router.put('/api/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body; // Os campos atualizados virão no corpo da requisição

        // Encontre o livro pelo ID e atualize-o
        const updatedBook = await Book.findByIdAndUpdate(id, updatedData, { new: true }); // Certifique-se de usar o método correto do seu banco de dados

        if (!updatedBook) {
            return res.status(404).json({ message: 'Livro não encontrado.' });
        }

        res.status(200).json({ message: 'Livro atualizado com sucesso!', book: updatedBook });
    } catch (error) {
        console.error("Erro ao atualizar o livro:", error);
        res.status(500).json({ message: 'Erro ao atualizar o livro', error });
    }
});


router.delete('/api/books/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Remova o livro do banco de dados
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({ message: 'Livro não encontrado.' });
        }

        res.status(200).json({ message: 'Livro removido com sucesso!' });
    } catch (error) {
        console.error("Erro ao remover o livro:", error);
        res.status(500).json({ message: 'Erro ao remover o livro', error });
    }
});

  
  

module.exports = router;
