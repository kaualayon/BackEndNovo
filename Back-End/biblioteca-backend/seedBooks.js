const mongoose = require('mongoose');
const Book = require('./models/book'); // Importa o modelo de livros

// Conectar ao MongoDB
mongoose.connect('mongodb+srv://limakaua582:k07120629@library.r5nfy.mongodb.net/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Array de livros para adicionar ao banco de dados
const books = [
    { id: 1, title: "O Alquimista", author: "Paulo Coelho", image: "./images/o_alquimista.jpg", quantity: 5, totalQuantity: 5 },
    { id: 2, title: "1984", author: "George Orwell", image: "./images/1984.jpg", quantity: 3, totalQuantity: 3 },
    { id: 3, title: "Dom Casmurro", author: "Machado de Assis", image: "./images/dom_casmurro.jpg", quantity: 4, totalQuantity: 4 },
    { id: 4, title: "A Moreninha", author: "Joaquim Manuel de Macedo", image: "./images/a_moreninha.jpg", quantity: 2, totalQuantity: 2 },
    { id: 5, title: "O Pequeno Príncipe", author: "Antoine de Saint-Exupéry", image: "./images/o_pequeno_principe.jpg", quantity: 6, totalQuantity: 6 },
    { id: 6, title: "Cem Anos de Solidão", author: "Gabriel García Márquez", image: "./images/cem_anos_de_solidao.jpg", quantity: 3, totalQuantity: 3 },
    { id: 7, title: "A Revolução dos Bichos", author: "George Orwell", image: "./images/a_revolucao_dos_bichos.jpg", quantity: 4, totalQuantity: 4 },
    { id: 8, title: "O Senhor dos Anéis", author: "J.R.R. Tolkien", image: "./images/o_senhor_dos_aneis.jpg", quantity: 5, totalQuantity: 5 },
    { id: 9, title: "Fahrenheit 451", author: "Ray Bradbury", image: "./images/fahrenheit_451.jpg", quantity: 3, totalQuantity: 3 },
    { id: 10, title: "A Menina que Roubava Livros", author: "Markus Zusak", image: "./images/a_menina_que_roubava_livros.jpg", quantity: 4, totalQuantity: 4 },
    { id: 11, title: "O Sol é para Todos", author: "Harper Lee", image: "./images/o_sol_e_para_todos.jpg", quantity: 2, totalQuantity: 2 },
    { id: 12, title: "Orgulho e Preconceito", author: "Jane Austen", image: "./images/orgulho_e_preconceito.jpg", quantity: 3, totalQuantity: 3 },
    { id: 13, title: "O Hobbit", author: "J.R.R. Tolkien", image: "./images/o_hobbit.jpg", quantity: 5, totalQuantity: 5 },
    { id: 14, title: "O Conto da Aia", author: "Margaret Atwood", image: "./images/o_conto_da_aia.jpg", quantity: 3, totalQuantity: 3 },
    { id: 15, title: "A Sombra do Vento", author: "Carlos Ruiz Zafón", image: "./images/a_sombra_do_vento.jpg", quantity: 2, totalQuantity: 2 },
    { id: 16, title: "Os Miseráveis", author: "Victor Hugo", image: "./images/os_miseraveis.jpg", quantity: 3, totalQuantity: 3 },
    { id: 17, title: "O Lobo da Estepe", author: "Hermann Hesse", image: "./images/o_lobo_da_estepe.jpg", quantity: 2, totalQuantity: 2 },
    { id: 18, title: "Crime e Castigo", author: "Fiódor Dostoiévski", image: "./images/crime_e_castigo.jpg", quantity: 3, totalQuantity: 3 },
    { id: 19, title: "A Insustentável Leveza do Ser", author: "Milan Kundera", image: "./images/a_insustentavel_leveza_do_ser.jpg", quantity: 3, totalQuantity: 3 },
    { id: 20, title: "O Código Da Vinci", author: "Dan Brown", image: "./images/o_codigo_da_vinci.jpg", quantity: 4, totalQuantity: 4 },
  ];

// Função para popular o banco de dados
const seedBooks = async () => {
  try {
    // Limpar coleção antes de popular (opcional)
    await Book.deleteMany({});
    console.log("Coleção de livros limpa!");

    // Inserir livros
    const insertedBooks = await Book.insertMany(books);
    console.log("Livros adicionados ao banco de dados:", insertedBooks);

    mongoose.disconnect(); // Fecha a conexão após inserir os livros
    console.log("Conexão com o banco de dados encerrada.");
  } catch (error) {
    console.error("Erro ao popular o banco de dados:", error);
    mongoose.disconnect();
  }
};

// Executa o script
seedBooks();
