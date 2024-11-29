// models/Favorite.js
const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assumindo que o modelo User está correto
    required: true
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book', // Deve fazer referência ao modelo Book
    required: true
  }
});

module.exports = mongoose.model('Favorite', favoriteSchema);
