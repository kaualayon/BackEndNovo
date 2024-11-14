const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publicationYear: Number,
    isbn:{type: String, required: true, unique: true}
});



module.exports = mongoose.model('Book', bookSchema);
