const express = require('express');
const router = express.Router(); // Certifique-se de usar 'router' (não 'Router')
const authController = require('../controllers/authController'); 


// Rota de registro
router.post('/register', authController.registerUser);

// Rota de login
router.post('/login', authController.loginUser);  // Confirme que isso está correto

// Rota para obter dados do usuário autenticado
router.get('/user', authController.getUser);

module.exports = router;
