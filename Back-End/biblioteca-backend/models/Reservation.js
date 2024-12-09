const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users', // Relaciona com o modelo de usuário
    required: true,
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'books', // Relaciona com o modelo de livros (se existir)
    required: true,
  },
  bookTitle: {
    type: String, // Nome do livro para exibição
    required: true,
  },
  reserveDate: {
    type: Date,
    default: Date.now, // Data em que a reserva foi feita
  },
  status: {
    type: String,
    enum: ['ativa', 'expirada', 'cancelada'], // Status da reserva
    default: 'ativa',
  },
});

module.exports = mongoose.model('Reservation', reservationSchema);
