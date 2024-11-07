const express = require('express');
const Router = express.Router();
const { registerUser } = require('../controllers/authController');

const router = express.Router();

// Define as rotas de autenticação com as funções de callback corretas
router.post('/register', registerUser);


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
