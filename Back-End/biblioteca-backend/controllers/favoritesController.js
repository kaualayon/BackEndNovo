// controllers/favoritesController.js
const Favorite = require('../models/Favorite');
const Book = require('../models/book');

// Adicionar um livro aos favoritos
exports.addFavorite = async (req, res) => {
  try {
    const { bookId } = req.body;
    const userId = req.user.id;

    // Verifica se o livro já está nos favoritos do usuário
    const existingFavorite = await Favorite.findOne({ userId, bookId });
    if (existingFavorite) {
      return res.status(400).json({ message: 'Este livro já está nos favoritos.' });
    }

    const favorite = new Favorite({ userId, bookId });
    await favorite.save();

    res.status(201).json({ message: 'Livro adicionado aos favoritos!', favorite });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao adicionar favorito.', error });
  }
};

// Obter os livros favoritos do usuário
exports.getFavorites = async (req, res) => {
  try {
    const userId = req.user.id;

    // Obtém os favoritos do usuário com os detalhes dos livros
    const favorites = await Favorite.find({ userId }).populate('bookId');

    res.status(200).json(favorites);  // Retorna os dados completos dos livros favoritos
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar favoritos.', error });
  }
};

// Remover um livro dos favoritos
exports.removeFavorite = async (req, res) => {
  try {
    const { bookId } = req.params;
    const userId = req.user.id;

    const favorite = await Favorite.findOneAndDelete({ userId, bookId });
    if (!favorite) {
      return res.status(404).json({ message: 'Favorito não encontrado.' });
    }

    res.status(200).json({ message: 'Livro removido dos favoritos!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao remover favorito.', error });
  }
};
