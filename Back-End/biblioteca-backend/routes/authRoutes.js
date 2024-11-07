const express = require('express');
const router = express.Router(); // Aqui você deve usar 'router', não 'Router'
const { registerUser, loginUser } = require('../controllers/authController');
const { User } = require('../models/User'); // Importando o modelo de usuário
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Rota de registro
router.post('/register', registerUser);

// Rota de login
router.post('/login', async (req, res) => {
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

    // Gera um token JWT
    const token = jwt.sign({ userId: user.id, email: user.email }, 'secreta', { expiresIn: '1h' });

    // Retorna o token para o frontend
    res.status(200).json({ message: 'Login bem-sucedido!', token });

  } catch (error) {
    res.status(500).json({ message: 'Erro ao realizar login.' });
  }
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
