const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json()); // Para processar JSON no corpo das requisições

app.use('/api/auth', authRoutes); // Rotas de autenticação

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
