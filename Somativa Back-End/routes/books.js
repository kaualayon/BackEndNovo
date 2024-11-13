





// Rota para adicionar um novo livro
router.post('/api/books/adicionar', async (req, res) => {
    try {
        const { title, author, publicationYear, isbn } = req.body;

        const newBook = new Book({
            title,
            author,
            publicationYear,
            isbn
        });

        await newBook.save();
        
        res.status(201).json({ message: 'Livro adicionado com sucesso!', book: newBook });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar o livro', error });
    }
});