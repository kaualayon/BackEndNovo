<template>
    <HeaderElement />
    <div class="reservation-page">
  
      <h1 class="page-title">Reserva de Livros</h1>
      <p class="page-description">Selecione o livro que deseja reservar.</p>
  
      <form class="reservation-form" @submit.prevent="reserveBook">
        <!-- Campo de Seleção de Livro -->
        <label for="book">Livro:</label>
        <select id="book" v-model="selectedBook" required>
          <option disabled value="">Selecione um livro</option>
          <option v-for="book in books" :key="book.id" :value="book.id">
            {{ book.title }}
          </option>
        </select>
  
        <!-- Campo de Data de Reserva -->
        <label for="reservationDate">Data de Reserva:</label>
        <input type="date" id="reservationDate" v-model="reservationDate" required />
  
        <!-- Botão de Envio -->
        <button type="submit" class="reserve-button">Reservar Livro</button>
      </form>
    </div>

    <FooterElement />
  </template>
  
  <script>
  import HeaderElement from "@/components/HeaderElement.vue";
  import FooterElement from "@/components/FooterElement.vue";
  import axios from 'axios';
  
  export default {
    name: "BookReservation",
    components: { HeaderElement, FooterElement },
    data() {
      return {
        books: [
        { id: 1, title: 'O Alquimista', author: 'Paulo Coelho', image: './images/o_alquimista.jpg' },
        { id: 2, title: '1984', author: 'George Orwell', image: './images/1984.jpg' },
        { id: 3, title: 'Dom Casmurro', author: 'Machado de Assis', image: './images/dom_casmurro.jpg' },
        { id: 4, title: 'A Moreninha', author: 'Joaquim Manuel de Macedo', image: './images/a_moreninha.jpg' },
        { id: 5, title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', image: './images/o_pequeno_principe.jpg' },
        { id: 6, title: 'Cem Anos de Solidão', author: 'Gabriel García Márquez', image: './images/cem_anos_de_solidao.jpg' },
        { id: 7, title: 'A Revolução dos Bichos', author: 'George Orwell', image: './images/a_revolucao_dos_bichos.jpg' },
        { id: 8, title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', image: './images/o_senhor_dos_aneis.jpg' },
        { id: 9, title: 'Fahrenheit 451', author: 'Ray Bradbury', image: './images/fahrenheit_451.jpg' },
        { id: 10, title: 'A Menina que Roubava Livros', author: 'Markus Zusak', image: './images/a_menina_que_roubava_livros.jpg' },
        { id: 11, title: 'O Sol é para Todos', author: 'Harper Lee', image: './images/o_sol_e_para_todos.jpg' },
        { id: 12, title: 'Orgulho e Preconceito', author: 'Jane Austen', image: './images/orgulho_e_preconceito.jpg' },
        { id: 13, title: 'O Hobbit', author: 'J.R.R. Tolkien', image: './images/o_hobbit.jpg' },
        { id: 14, title: 'O Conto da Aia', author: 'Margaret Atwood', image: './images/o_conto_da_aia.jpg' },
        { id: 15, title: 'A Sombra do Vento', author: 'Carlos Ruiz Zafón', image: './images/a_sombra_do_vento.jpg' },
        { id: 16, title: 'Os Miseráveis', author: 'Victor Hugo', image: './images/os_miseraveis.jpg' },
        { id: 17, title: 'O Lobo da Estepe', author: 'Hermann Hesse', image: './images/o_lobo_da_estepe.jpg' },
        { id: 18, title: 'Crime e Castigo', author: 'Fiódor Dostoiévski', image: './images/crime_e_castigo.jpg' },
        { id: 19, title: 'A Insustentável Leveza do Ser', author: 'Milan Kundera', image: './images/a_insustentavel_leveza_do_ser.jpg' },
        { id: 20, title: 'O Código Da Vinci', author: 'Dan Brown', image: './images/o_codigo_da_vinci.jpg' },
      ],
        selectedBook: "",
        reservationDate: ""
      };
    },
    created() {
      this.fetchBooks(); // Busca a lista de livros ao carregar a página
    },
    methods: {
      async fetchBooks() {
        try {
          const response = await axios.get("http://localhost:5000/api/books");
          this.books = response.data;
        } catch (error) {
          console.error("Erro ao carregar livros:", error);
          alert("Não foi possível carregar a lista de livros.");
        }
      },
      async reserveBook() {
        try {
          const reservationData = {
            bookId: this.selectedBook,
            reservationDate: this.reservationDate
          };
          const response = await axios.post("http://localhost:5000/api/reservations", reservationData);
          if (response.status === 201) {
            alert("Livro reservado com sucesso!");
            this.resetForm();
          }
        } catch (error) {
          console.error("Erro ao reservar o livro:", error);
          alert("Erro ao reservar o livro. Tente novamente.");
        }
      },
      resetForm() {
        this.selectedBook = "";
        this.reservationDate = "";
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilo aplicado para a página de reserva de livros */
  .reservation-page {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    color: #333;
    background-color: #f9f9f9;
  }
  
  .page-title {
    font-size: 28px;
    color: #D32F2F;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .page-description {
    font-size: 18px;
    text-align: center;
    margin-bottom: 30px;
    color: #666;
  }
  
  .reservation-form label {
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
    display: block;
  }
  
  .reservation-form select,
  .reservation-form input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .reserve-button {
    background-color: #D32F2F;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    transition: background-color 0.3s ease;
  }
  
  .reserve-button:hover {
    background-color: #B71C1C;
  }
  </style>
  