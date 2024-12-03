const express = require('express'); // Importa o módulo express para criar a aplicação
const router = express.Router(); // Cria um roteador para definir as rotas específicas
const authController = require('../controllers/authControllers'); // Importa o controlador responsável pelas ações de autenticação

// Rota para registrar um novo usuário no sistema
router.post('/register', authController.register); // Chama o método register do controlador

// Rota para realizar o login de um usuário
router.post('/login', authController.login); // Chama o método login do controlador

// Rota para obter a lista de todos os usuários registrados
router.get('/user', authController.getAllUsers); // Chama o método getAllUsers do controlador para retornar todos os usuários

module.exports = router; // Exporta o roteador para ser utilizado em outras partes da aplicação, como no app.js
