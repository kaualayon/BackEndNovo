const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Ajuste o caminho conforme sua estrutura

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Obtém o token no formato "Bearer <token>"
  
  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Armazena os dados decodificados do token no req.user
    next(); // Continua para o próximo middleware ou rota
  } catch (error) {
    console.error('Erro ao verificar token:', error);
    res.status(401).json({ message: 'Token inválido.' });
  }
};

module.exports = verifyToken;
