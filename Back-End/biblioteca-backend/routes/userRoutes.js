const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const { User } = require('../models/User'); // Seu modelo de usuário

// Defina suas rotas de usuários aqui, como listar, editar ou excluir
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários' });
  }
});

// Rota no backend
router.get('/user', async (req, res) => {
  try {
    // Verifica se o token existe no cabeçalho da requisição
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Token de autenticação não fornecido' });
    }

    // Verifica e decodifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Busca o usuário usando o ID decodificado do token
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Retorna o username do usuário
    res.json({ username: user.username });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter dados do usuário' });
  }
});




// Rota POST para criar um novo usuário
router.post('/api/auth/register', async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao registrar usuário.', error: err });
  }
});



router.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Senha incorreta.' });
    }

    // Retorna as informações do usuário, incluindo o papel
    res.status(200).json({ username: user.username, role: user.role });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao realizar login.', error: err });
  }
});


module.exports = router;
