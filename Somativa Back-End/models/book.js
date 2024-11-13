const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publicationYear: Number,
    isbn: String
});



module.exports = mongoose.model('Book', bookSchema);
