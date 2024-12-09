const Reservation = require('../models/Reservation'); // Modelo de reservas
const Book = require('../models/book'); // Modelo de livros (ajuste o caminho conforme sua estrutura)

exports.createReservation = async (req, res) => {
    const { bookId } = req.body; // Recebe o ID do livro
  
    try {
      // Verifica se o livro existe
      const book = await Book.findById(bookId);
      if (!book) {
        return res.status(404).json({ message: 'Livro não encontrado.' });
      }
  
      // Cria uma nova reserva vinculada ao usuário autenticado
      const newReservation = new Reservation({
        userId: req.user.id, // ID do usuário autenticado
        bookId,
        bookTitle: book.title, // Nome do livro
      });
  
      await newReservation.save();
      res.status(201).json({
        message: 'Reserva criada com sucesso.',
        reservation: newReservation,
      });
    } catch (error) {
      console.error('Erro ao criar reserva:', error);
      res.status(500).json({ message: 'Erro ao criar a reserva.' });
    }
  };

  exports.getReservations = async (req, res) => {
    try {
      // Busca todas as reservas vinculadas ao usuário autenticado
      const reservations = await Reservation.find({ userId: req.user.id });
  
      if (!reservations || reservations.length === 0) {
        return res.status(404).json({ message: 'Nenhuma reserva encontrada.' });
      }
  
      res.status(200).json({ reservations });
    } catch (error) {
      console.error('Erro ao buscar reservas:', error);
      res.status(500).json({ message: 'Erro ao buscar as reservas.' });
    }
  };

  exports.cancelReservation = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Encontra a reserva vinculada ao usuário autenticado
      const reservation = await Reservation.findOne({
        _id: id,
        userId: req.user.id,
      });
  
      if (!reservation) {
        return res.status(404).json({ message: 'Reserva não encontrada.' });
      }
  
      // Atualiza o status para "cancelada"
      reservation.status = 'cancelada';
      await reservation.save();
  
      res.status(200).json({ message: 'Reserva cancelada com sucesso.' });
    } catch (error) {
      console.error('Erro ao cancelar reserva:', error);
      res.status(500).json({ message: 'Erro ao cancelar a reserva.' });
    }
  };