// routes/authRoutes.js
const express = require('express');
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

module.exports = router;
