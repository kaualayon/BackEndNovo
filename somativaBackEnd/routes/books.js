const express = require ('express'); // Importamos o Express
const Book = require('../models/book'); //Importamos o modelo Book
const router = express.Router(); //Criamos o roteador


// Rota para criação (POST)
router.post('/', async(req, res) => {
    const{ title, author, publicationYear, isbn} = req.body; // Extraimos o dados da requisição
    try{
        const newBook = new Book({title, author, publicationYear, isbn}); // Criamos e salvamos o livro
        await newBook.save();
        res.status(201).json(newBook); // Retornamos o livro criado
    }catch (error) {
        res.status(500).json({message: 'Erro ao criar o livro', error}); //Retornamos
    }
});


// Rota para atualização (GET)
router.get('/', async(req, res) => {
    try{
        const books = await Book.find(); //Buscamos todos os livros
        res.status(200).json(books); //Retornamos a lista dos livros
    }catch (error) {
        res.status(500).json({message: 'Erro ao buscar os livros', error}); //Retornamos erro, se houver
    }
});



// Rota para atualização (PUT)
router.put('/:id', async(req, res) => {
    const{ title, author, publicationYear, isbn} = req.body; // Extraimos os novos dados
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, {title, author, publicationYear, isbn}, {new: True }); //Atualizamos o livro pelo id
        res.status(200).json(updatedBook); // Retornamos o livro atualziado
    }catch (error) {
        res.status(500).json({message: 'Erro ao atualizar livro', error}); //Retornamos
    }
});



// Rota DELETE (Excluir) pelo ISBN
router.delete('/isbn/:isbn', async (req, res) => {
    const { isbn } = req.params; // extrai o ISBN da URL
    try {
        const deletedBook = await Book.findOneAndDelete({ isbn: isbn }); // busca e deleta o livro pelo ISBN
        if (!deletedBook) {
            return res.status(404).json({ message: 'Livro não encontrado com esse ISBN' }); // retorna erro se não encontrar o livro
        }
        res.status(200).json({ message: 'Livro deletado com sucesso', book: deletedBook });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao tentar deletar o livro', error });
    }
});




//Exportamos o roteador para ser usado no server.js
module.exports = router;