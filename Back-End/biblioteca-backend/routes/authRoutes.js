// routes/authRoutes.js
const express = require('express');
const User = require('../models/User');
const { registerUser, loginUser, protect } = require('../controllers/authController');
const router = express.Router();

// Rota para registrar um novo usuário
router.post('/register', registerUser);

// Rota para fazer login
router.post('/login', loginUser);

// Rota protegida que só pode ser acessada com o token JWT
router.get('/profile', protect, (req, res) => {
  res.status(200).json({ message: 'Bem-vindo ao perfil do usuário', user: req.user });
});

// Listar todos os usuários
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
});

// Editar um usuário
router.put('/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar o usuário" });
  }
});

// Excluir um usuário
router.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Usuário excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir o usuário" });
  }
});

module.exports = router;
