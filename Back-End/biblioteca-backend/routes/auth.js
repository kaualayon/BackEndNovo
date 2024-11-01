const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Verificar se o usuário já existe
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ success: false, message: 'Usuário já existe' });
    }

    // Criar um novo usuário
    user = new User({
      username,
      email,
      password: await bcrypt.hash(password, 10), // Hash da senha
    });

    await user.save();
    res.status(201).json({ success: true, message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro no servidor' });
  }
});

module.exports = router;
