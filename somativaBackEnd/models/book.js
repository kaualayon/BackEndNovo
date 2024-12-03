const mongoose = require('mongoose');

// Criando o esquema do livro com os campos
const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number },
    ISBN: { type: String, required: true, unique: true },
    image: { type: String, required: true } 
});

// Exportando o modelo do livrro criado
module.exports = mongoose.model('Book', BookSchema);