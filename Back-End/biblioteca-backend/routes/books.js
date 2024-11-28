const Book = require('../models/book');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const bcrypt = require('bcryptjs');
const path = require('path');

require("dotenv").config();

// Diretório onde as imagens serão armazenadas
const uploadDir = path.join(__dirname, 'uploads');

// Configuração do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Define o diretório de upload
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName); // Gera um nome único para o arquivo
  },
});

const upload = multer({ storage });

// Certifique-se de que o diretório `uploads` exista
const fs = require('fs');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Rota para adicionar um livro
router.post('/api/books/add', upload.single('image'), async (req, res) => {
    try {
      const { title, author, description, publicationYear, genre, isbn, availableCopies } = req.body;
  
      // Verifique se um arquivo foi enviado
      const imagePath = req.file ? `/uploads/${req.file.filename}` : null;
  
      // Crie o livro no banco de dados
      const newBook = new Book({
        title,
        author,
        description,
        publicationYear,
        genre,
        isbn,
        availableCopies,
        image: imagePath, // Salve o caminho da imagem
      });
  
      await newBook.save();
      res.status(201).json({ message: 'Livro adicionado com sucesso!', book: newBook });
    } catch (error) {
      console.error('Erro ao adicionar livro:', error);
      res.status(500).json({ message: 'Erro ao adicionar livro.' });
    }
  });

// Rota para listar os livros
router.get('/books', async (req, res) => {
    try {
      const books = await Book.find(); // Busca todos os livros do banco
      res.status(200).json(books);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
      res.status(500).json({ message: 'Erro ao buscar livros' });
    }
  });


router.put('/books/:id', async (req, res) => {
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


router.delete('/books/:id', async (req, res) => {
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
