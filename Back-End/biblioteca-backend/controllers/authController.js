const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/User');
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

// Função para realizar o login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Por favor, insira o e-mail e a senha.' });
  }

  try {
    // Verifica se o usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'E-mail ou senha inválidos.' });
    }

    // Compara a senha fornecida com a senha criptografada no banco
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'E-mail ou senha inválidos.' });
    }

    // Gera o token JWT
    const token = jwt.sign({ userId: user.id, email: user.email }, 'secreta', { expiresIn: '1h' });

    // Retorna o token para o frontend
    res.status(200).json({ message: 'Login bem-sucedido!', token });

  } catch (error) {
    res.status(500).json({ message: 'Erro ao realizar login.' });
  }
};










module.exports = { registerUser, loginUser };
