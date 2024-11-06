const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    publicationYear: Number,
    genre: String,
    isbn: String,
    availableCopies: Number
});

module.exports = mongoose.model('Book', bookSchema);
