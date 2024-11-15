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


// Rota POST para criar um novo usuário
router.post('/register', async (req, res) => {
  const {username, email, password} = req.body;
  
  //verifica se o usuário já existe
  const userExists = users.find(user => user.email === email);
  if(userExists){
    return res.status(400).json({message: 'Usuário já existe com esse email!'})
  }

  //Hash da senha
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({username, password:hashedPassword});

  res.status(201).json({message: 'Usuário registrado com sucesso!'});
});


//Rota para login
router.post('/login', async (req, res) => {
  const {email, password} = req.body;
  const user = users.find(user => user.email === email);

  if(!user || !(await bcrypt.compare(password, user.password))){
    return res.status(401).json({message: 'Credenciais inválidas!'});
  }

  const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '1h'});
  res.json({token});
});

module.exports = router;
