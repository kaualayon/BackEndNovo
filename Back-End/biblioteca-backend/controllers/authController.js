const { User } = require('../models/User'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Por favor, insira o e-mail e a senha.' });
  }

  try {
    // Verifica se o usuário existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'E-mail ou senha inválidos.' });
    }

    // Compara a senha fornecida com a senha criptografada no banco
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'E-mail ou senha inválidos.' });
    }

    // Gera um token JWT
    const token = jwt.sign({ userId: user._id, email: user.email }, 'secreta', { expiresIn: '1h' });

    // Retorna o token para o frontend
    res.status(200).json({ message: 'Login bem-sucedido!', token });

  } catch (error) {
    console.error('Erro ao realizar login', error);
    res.status(500).json({ message: 'Erro ao realizar login.' });
  }
};

module.exports = { registerUser, loginUser };
