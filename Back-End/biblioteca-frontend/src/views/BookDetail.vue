<template>
  <div>
    <!-- Importando e utilizando o HeaderElement -->
    <HeaderElement  />

    <!-- Sidebar (oculta inicialmente) -->
    <div v-if="sidebarOpen" class="sidebar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Livros</a></li>
        <li><a href="#">Perfil</a></li>
        <li><a href="#">Configurações</a></li>
      </ul>
    </div>

    <!-- Detalhes do livro -->
    <div class="book-detail-container" v-if="book">
      <div class="book-image">
        <img :src="book.image" :alt="book.title" />
      </div>
      <div class="book-info">
        <h1>{{ book.title }}</h1>
        <p class="author">Autor: {{ book.author }}</p>
        <p class="price">Preço para reserva: R$ {{ book.price ? book.price.toFixed(2) : 'N/A' }}</p>

        <div class="ratings">
          <h2>Avaliações:</h2>
          <p>{{ book.rating }} ★</p>
          <p>{{ book.reviewCount }} avaliações</p>
        </div>

        <div class="book-history">
          <h2>Histórico de Empréstimos:</h2>
          <ul>
            <li v-for="loan in book.loans" :key="loan.id">
              <p>{{ loan.user }} - Empréstimo realizado em: {{ loan.date }}</p>
            </li>
          </ul>
        </div>

        <div class="button-container">
          <button @click="reserveBook(book)" class="reserve-button">Reservar Livro</button>
          <button @click="borrowBook(book)" class="borrow-button">Emprestar Livro</button>
          <button @click="addToWishlist" class="add-to-wishlist">Adicionar à Lista de Desejos</button>
          <button @click="shareBook" class="share-button">Compartilhar</button>
        </div>

        <div class="user-review">
          <h2>Deixe sua avaliação:</h2>
          <textarea v-model="userReview" placeholder="Escreva sua avaliação aqui..."></textarea>
          <button @click="submitReview" class="submit-review">Enviar Avaliação</button>
        </div>

        <div class="comments">
          <h2>Comentários:</h2>
          <ul>
            <li v-for="comment in comments" :key="comment.id">{{ comment.text }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Importando o HeaderElement
import HeaderElement from '@/components/HeaderElement.vue';

export default {
  name: 'BookDetail',
  components: {
    HeaderElement,
  },
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
      book: null,
      userReview: '',
      comments: [],
      nextCommentId: 1,
      searchQuery: '',
      sidebarOpen: false,
    };
  },
  mounted() {
    const bookId = this.$route.params.id;
    this.book = this.books.find(b => b.id === Number(bookId)) || null;
  },
  methods: {
    reserveBook(book) {
      const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
      reservations.push(book);
      localStorage.setItem('reservations', JSON.stringify(reservations));
      alert(`${book.title} foi reservado com sucesso!`);
    },
    borrowBook(book) {
      const loans = JSON.parse(localStorage.getItem('loans')) || [];
      loans.push(book);
      localStorage.setItem('loans', JSON.stringify(loans));
      alert(`${book.title} foi emprestado com sucesso!`);
    },
    addToWishlist() {
      if (this.book) {
        alert(`${this.book.title} foi adicionado à lista de desejos!`);
      }
    },
    shareBook() {
      if (this.book) {
        const shareUrl = `https://www.example.com/book/${this.book.id}`;
        navigator.clipboard.writeText(shareUrl)
          .then(() => {
            alert('Link do livro copiado para a área de transferência!');
          });
      }
    },
    submitReview() {
      if (this.userReview.trim() !== '') {
        this.comments.push({ id: this.nextCommentId++, text: this.userReview });
        this.userReview = '';
        alert('Avaliação enviada com sucesso!');
      } else {
        alert('Por favor, escreva uma avaliação.');
      }
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    searchBooks(query) {
      if (query.trim() !== '') {
        alert(`Pesquisando por: ${query}`);
        // Implementar a lógica de busca
      }
    },
  },
};
</script>

<style scoped>


/* Detalhes do Livro */
.book-detail-container {
  display: flex;
  justify-content: space-around;
  padding: 30px;
  max-width: 900px;
  margin: 20px auto;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.book-image img {
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.book-info {
  max-width: 500px;
  margin-left: 20px;
}

h1 {
  font-size: 2em;
  color: #2c3e50;
  margin-bottom: 10px;
}

.author {
  font-size: 1.1em;
  color: #7f8c8d;
}

.price {
  font-size: 1.4em;
  color: #e74c3c;
  margin: 10px 0;
}

.ratings {
  margin: 20px 0;
}

.book-history {
  margin-top: 20px;
}

.book-history ul {
  list-style: none;
  padding: 0;
}

.book-history li {
  background-color: #ecf0f1;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
}

.button-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.reserve-button,
.borrow-button,
.add-to-wishlist,
.share-button,
.submit-review {
  background-color: #3498db;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.reserve-button:hover,
.borrow-button:hover,
.add-to-wishlist:hover,
.share-button:hover,
.submit-review:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

.user-review {
  margin-top: 20px;
}

.user-review textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  resize: none;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.comments {
  margin-top: 20px;
}

.comments ul {
  list-style: none;
  padding: 0;
}

.comments li {
  background-color: #ecf0f1;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
}
</style>
