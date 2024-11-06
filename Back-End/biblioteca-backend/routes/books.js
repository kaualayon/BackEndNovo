const Book = require('../models/book');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require("dotenv").config();
// Rota para adicionar um novo livro
router.post('/add', async (req, res) => {
    try {
        const { title, author, description, publicationYear, genre, isbn, availableCopies } = req.body;

        const newBook = new Book({
            title,
            author,
            description,
            publicationYear,
            genre,
            isbn,
            availableCopies
        });

        await newBook.save();
        
        res.status(201).json({ message: 'Livro adicionado com sucesso!', book: newBook });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar o livro', error });
    }
});

module.exports = router;
