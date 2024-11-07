const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

// Função para registrar o usuário
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    // Verifica se o usuário já existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Usuário já registrado.' });
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria um novo usuário no banco de dados
    const newUser = await User.create({ username, email, password: hashedPassword });

    res.status(200).json({ message: 'Registro realizado com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar o usuário.' });
  }
};

// Função para gerar o token JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'E-mail ou senha inválidos.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'E-mail ou senha inválidos.' });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      message: 'Login realizado com sucesso!',
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

module.exports = { registerUser, loginUser };
