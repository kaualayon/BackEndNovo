const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/userRoutes'); // Importando as rotas de usuários
const dotenv = require('dotenv');

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Usar as rotas de livros
app.use('/api/books', bookRoutes);

// Usar as rotas de autenticação
app.use('/api/auth', authRoutes);

// Usar as rotas de usuários
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
