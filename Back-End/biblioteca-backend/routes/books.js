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

        // Obtém o caminho da imagem (caso tenha sido enviada)
        const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

        const newBook = new Book({
            title,
            author,
            description,
            publicationYear,
            genre,
            isbn,
            availableCopies,
            image: imagePath // Salva o caminho da imagem no banco de dados
        });

        await newBook.save();
        
        res.status(201).json({ message: 'Livro adicionado com sucesso!', book: newBook });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar o livro', error });
    }
});

// Configuração para servir arquivos estáticos (imagens)
router.use('/uploads', express.static(path.join(__dirname, 'uploads')));

module.exports = router;
