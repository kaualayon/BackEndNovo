const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

//Inicialização do app
const app = express();
app.use(cors());
app.use(express.json());


// Conexão ao mongo db
mongoose.connect('mongodb+srv://limakaua582:k07120629@library.r5nfy.mongodb.net/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log('Mongo Db conectado!'))
.catch(err => console.error('Erro ao conectar ao MongoDb!', err));


//Importação das rotas
const booksRoutes = require('./routes/books');
app.use('/api/books', booksRoutes);

//Definir porta do servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


