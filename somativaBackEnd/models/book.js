const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publicationYear: Number,
    isbn: Number
});



module.exports = mongoose.model('Book', bookSchema);
