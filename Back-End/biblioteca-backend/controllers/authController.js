const bcrypt = require('bcrypt');
const User = require('../models/User'); // Certifique-se de que o modelo User está configurado corretamente

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

module.exports = { registerUser };
