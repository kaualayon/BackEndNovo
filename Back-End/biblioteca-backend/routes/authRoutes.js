const express = require('express');
const router = express.Router(); // Certifique-se de usar 'router' (não 'Router')
const { registerUser, loginUser } = require('../controllers/authController'); 

// Rota de registro
router.post('/register', registerUser);

// Rota de login
router.post('/login', loginUser);  // Confirme que isso está correto

module.exports = router;
