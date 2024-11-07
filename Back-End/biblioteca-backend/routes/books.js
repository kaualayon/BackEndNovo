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

module.exports = router;
