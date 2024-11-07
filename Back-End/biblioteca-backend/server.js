const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
connectDB();

app.use(cors());


app.use(bodyParser.json());

// Usar as rotas de livros
app.use('/api/books', bookRoutes);


app.use('/api/auth', authRoutes); // Rotas de autenticação

app.use('/api/users', authRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
