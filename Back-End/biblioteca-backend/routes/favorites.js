// routes/favorites.js
const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');
const authMiddleware = require('../Middleware/authMiddleware');  // Exemplo de middleware de autenticação

// Adicionar um livro aos favoritos
router.post('/favorites', favoritesController.addFavorite);

// Obter os livros favoritos do usuário
router.get('/favorites', authMiddleware, favoritesController.getFavorites);

// Remover um livro dos favoritos
router.delete('/favorites/:bookId', favoritesController.removeFavorite);

module.exports = router;
