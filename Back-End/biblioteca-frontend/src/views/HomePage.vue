<template>

  <!-- Incluindo o HeaderElement -->
  <HeaderElement />

  <!-- Saudação ao usuário -->
  <div class="welcome-message" v-if="username">
      <h2>Bem-vindo, {{ username }}!</h2>
      <p>Estamos felizes em tê-lo de volta. Explore nossos recursos abaixo.</p>
    </div>

    <!-- Título da HomePage -->
    <h2 class="page-title">Dashboard</h2>

   <!-- Status de Empréstimos, Devoluções e Reservas -->
   <div class="status-cards">
      <div class="status-card">
        <h3>Empréstimos Ativos</h3>
        <p class="status-number">{{ activeLoans }}</p>
        <p class="status-info">Livros emprestados atualmente</p>
      </div>

      <div class="status-card">
        <h3>Devoluções Pendentes</h3>
        <p class="status-number">{{ pendingReturns }}</p>
        <p class="status-info">Livros aguardando devolução</p>
      </div>

      <div class="status-card">
        <h3>Reservas</h3>
        <p class="status-number">{{ activeReservations }}</p>
        <p class="status-info">Livros reservados</p>
      </div>
    </div>

  
  <div class="catalog-page">
    

    <!-- Título do Catálogo de Livros -->
    <h2 class="page-title">Catálogo de Livros</h2>

    <!-- Catálogo de Livros -->
    <div class="book-catalog">
      <div v-if="books.length === 0" class="no-books">
        <p>Não há livros disponíveis no catálogo.</p>
      </div>
      <div v-else>
        <div class="book-list">
          <div class="book-card" v-for="book in books" :key="book.id">
            <div class="book-image">
              <img :src="book.image" alt="Capa do livro" />
            </div>
            <h4>{{ book.title }}</h4>
            <p>{{ book.author }}</p>
            <p>Quantidade Disponível: <span :class="book.quantity > 0 ? 'available' : 'unavailable'">{{ book.quantity }}</span></p>
             <!-- Botões de Ação -->
          <div class="book-buttons">
            <button @click="reserveBook(book)" :disabled="book.quantity === 0">Reservar</button>
            <button @click="returnBook(book)" :disabled="book.quantity === book.totalQuantity">Devolver</button>
            <button @click="viewBookDetails(book.id)">Ver Detalhes</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <FooterElement />
</template>

<script>
// Importando o HeaderElement e FooterElement
import HeaderElement from "@/components/HeaderElement.vue";
import FooterElement from "@/components/FooterElement.vue";

export default {
  components: {
    HeaderElement, FooterElement
  },
  data() {
    return {
      // Lista de livros com imagens e disponibilidade para o catálogo
      books: [
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
      ],

    };
  },

  created() {
    this.loadBooksFromStorage(); // Carregar os livros do localStorage ao carregar a página
  },

  methods: {
    reserveBook(book) {
      if (book.quantity > 0) {
        book.quantity--; // Reduz a quantidade disponível
        alert(`Você reservou o livro: ${book.title}`);
      } else {
        alert("Este livro não está disponível no momento.");
      }
    },
    returnBook(book) {
      if (book.quantity < book.totalQuantity) {
        book.quantity++; // Aumenta a quantidade disponível
        alert(`Você devolveu o livro: ${book.title}`);
      } else {
        alert("Não há devoluções pendentes para este livro.");
      }
    },
    viewBookDetails(bookId) {
      console.log(`Visualizando detalhes do livro com ID: ${bookId}`);
      // Lógica para redirecionar ou exibir detalhes do livro
      this.$router.push(`/book/${bookId}`);
    },


    addBookToCatalog(newBook) {
      newBook.quantity = 1; // Define quantidade inicial como 1 para novos livros
      this.books.push(newBook); // Adiciona o novo livro à lista
      this.saveBooksToStorage(); // Salva no localStorage
    },

    saveBooksToStorage() {
      localStorage.setItem('books', JSON.stringify(this.books)); // Atualiza os dados no localStorage
    },

    loadBooksFromStorage() {
      const books = localStorage.getItem('books');
      if (books) {
        this.books = JSON.parse(books); // Converte os dados do localStorage para o array de objetos
      }
    }
  },
};
</script>


<style scoped>

.book-buttons {
  display: flex;
  gap: 10px; /* Espaçamento entre os botões */
  margin-top: 10px; /* Espaçamento entre botões e a descrição */
}

.book-buttons button {
  padding: 8px 12px;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.book-buttons button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.book-buttons button:hover:not(:disabled) {
  background-color: #45a049;
}

/* Classes para Disponibilidade */
.available {
  color: green;
  font-weight: bold;
}

.unavailable {
  color: red;
  font-weight: bold;
}

/* Estilo geral da página de catálogo */
.catalog-page {
  background-color: #f9f9f9;
  box-sizing: border-box;
}

/* Título do catálogo */
.page-title {
  font-size: 28px;
  font-weight: bold;
  color: #D32F2F;
  margin-bottom: 20px;
  text-align: center;
}

/* Seção de Catálogo de Livros */
.book-catalog {
  margin-top: 40px;
}

.book-catalog h3 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

/* Layout do catálogo de livros */
.book-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.book-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  max-width: 250px;
  margin: 0 auto;
}

.book-card:hover {
  transform: scale(1.05);
}

.book-card h4 {
  font-size: 18px;
  margin-bottom: 10px;
}

.book-card p {
  font-size: 16px;
  margin-bottom: 10px;
}

.book-card button {
  background-color: #D32F2F;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.book-card button:hover {
  background-color: #B71C1C;
}

.book-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

/* Seção sem livros */
.no-books {
  text-align: center;
  font-size: 16px;
  color: #777;
}

/* Saudação ao usuário */
.welcome-message {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  text-align: center;
}

.welcome-message h2 {
  font-size: 26px;
  font-weight: 700;
  color: #D32F2F;
  margin-bottom: 10px;
}

.welcome-message p {
  font-size: 16px;
  color: #555;
}

/* Título da página */
.page-title {
  font-size: 30px;
  font-weight: 700;
  color: #D32F2F;
  margin-bottom: 30px;
  text-align: center;
}

/* Cards de Status */
.status-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-bottom: 40px;
}

.status-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 25px;
  width: 280px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.status-card h3 {
  font-size: 22px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.status-number {
  font-size: 40px;
  font-weight: 700;
  color: #D32F2F;
  margin-bottom: 10px;
}

.status-info {
  font-size: 16px;
  color: #777;
}

.status-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}


/* Media Queries para telas menores (responsividade) */
@media (max-width: 768px) {
  .book-card {
    width: 100%;
    max-width: 350px;
  }

  .book-list {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 24px;
  }

  .book-card {
    width: 90%;
    max-width: 400px;
  }
}
</style>
