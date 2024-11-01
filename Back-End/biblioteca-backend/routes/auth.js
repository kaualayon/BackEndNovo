const User = require('../models/user');
const express = require('express');
const bcrypt = require('bcryptjs');

require("dotenv").config();

const router = express.Router();

router.post('/register', async (req, res) => {
    console.log("Dados recebidos:", req.body); // Log dos dados recebidos
  const { username, email, password } = req.body;

  try {
    // Verificar se o usuário já existe
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ success: false, message: 'Usuário já existe' });
    }

    // Criar novo usuário
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

    await user.save();
    res.json({ success: true, message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    console.error("Erro no registro:", error); // Log do erro
    res.status(500).json({ success: false, message: 'Erro ao registrar usuário.' });
  }
});

// Rota para buscar todos os usuários
router.get('/users', async (req, res) => {
    try {
      const users = await User.find(); // Busca todos os usuários
      res.json({ success: true, users });
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      res.status(500).json({ success: false, message: "Erro ao buscar usuários." });
    }
  });

module.exports = router;
