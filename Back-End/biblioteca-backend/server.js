const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv');
const path = require('path');


const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/userRoutes'); // Importando as rotas de usuários
const favoriteRoutes = require('./routes/favorites'); // Novas rotas

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Usar as rotas de livros
app.use('/api', bookRoutes);

app.use('/api', favoriteRoutes); // Adiciona as rotas de favoritos

// Usar as rotas de autenticação
app.use('/api/auth', authRoutes);

// Usar as rotas de autenticação
app.use('/api/user', authRoutes);

// Usar as rotas de usuários
app.use('/api/users', userRoutes);




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

//Midleware
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
