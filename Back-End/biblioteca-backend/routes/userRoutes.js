const express = require('express');
const { User } = require('../models/User'); // Seu modelo de usuário
const router = express.Router();

// Defina suas rotas de usuários aqui, como listar, editar ou excluir
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários' });
  }
});

module.exports = router;
