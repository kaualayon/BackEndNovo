const express = require('express'); // Importa o framework express para criação da API
const mongoose = require('mongoose'); // Importa o mongoose para interação com o MongoDB
const cors = require('cors'); // Importa o middleware CORS para permitir requisições de diferentes origens
const path = require('path'); // Importa o módulo path para trabalhar com diretórios e caminhos de arquivos
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env para configuração segura

// Criação e configuração do servidor Express
const app = express();
app.use(cors()); // Habilita o CORS para a API aceitar requisições de qualquer origem
app.use(express.json()); // Habilita o express para processar o corpo das requisições no formato JSON

// Estabelece a conexão com o banco de dados MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB conectado com sucesso')) // Mensagem de sucesso ao conectar
    .catch(err => console.error('Falha ao conectar com o MongoDB:', err)); // Mensagem de erro se a conexão falhar

// Configuração para servir arquivos estáticos da pasta "uploads" (imagens, documentos, etc.)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Importação das rotas para gerenciamento de livros e autenticação
const booksRoutes = require('./routes/books');
const authRoutes = require('./routes/authRoutes'); // Roteamento para as funcionalidades de autenticação
app.use('/api/books', booksRoutes); // Adiciona o prefixo '/api/books' para as rotas relacionadas aos livros
app.use('/api/auth', authRoutes); // Adiciona o prefixo '/api/auth' para as rotas de autenticação

// Rota de teste para garantir que a API está respondendo corretamente
app.get('/', (req, res) => {
    res.status(200).send('API funcionando corretamente!');
});

// Definição da porta em que o servidor irá escutar, utilizando uma variável de ambiente ou a porta 3000 por padrão
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`); // Confirma que o servidor foi iniciado na porta correta
});
