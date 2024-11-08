const { User } = require('../models/User'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Por favor, insira o usuário, o e-mail e a senha.' });
  }

  try {
    // Verifica se o usuário já existe no banco de dados
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'E-mail já registrado.' });
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria o novo usuário no banco de dados
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    // Salva o novo usuário no banco de dados
    await newUser.save();

    // Gera um token JWT
    const token = jwt.sign({ userId: newUser._id, email: newUser.email }, 'secreta', { expiresIn: '1h' });

    // Retorna o token para o frontend
    res.status(201).json({ message: 'Usuário registrado com sucesso!', token });

  } catch (error) {
    console.error('Erro ao registrar usuário', error);
    res.status(500).json({ message: 'Erro ao registrar usuário.' });
  }
};

const loginUser = async (req, res) => {
  
  const { email, password } = req.body;
  

  if (!email || !password) {
    return res.status(400).json({ message: 'Por favor, insira o e-mail e a senha.' });
  }

  try {
    // Verifica se o usuário existe
    const user = await User.findOne({ where: { email } });
    
    if (!user) {
      return res.status(401).json({ message: 'E-mail ou senha inválidos.' });
    }

    // Compara a senha fornecida com a senha criptografada no banco
    const match = await bcrypt.compare(password, user.password);
    console.log("Senha fornecida:", password);  // Logando a senha fornecida
console.log("Hash armazenado:", user.password);  // Logando o hash armazenado
    if (!match) {
      return res.status(401).json({ message: 'E-mail ou senha inválidos.' });
    }

    // Gera um token JWT
    const token = jwt.sign({ userId: user.id, email: user.email }, 'secreta', { expiresIn: '1h' });

    // Retorna o token para o frontend
    res.status(200).json({ message: 'Login bem-sucedido!', token });

  } catch (error) {
    console.error('Erro ao realizar login', error);
    res.status(500).json({ message: 'Erro ao realizar login.' });
  }
};


module.exports = { registerUser, loginUser };
