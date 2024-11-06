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
        { id: 1, title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', price: 15.99, rating: 4.8, reviewCount: 500, image: 'https://example.com/lotr.jpg', loans: [{ id: 1, user: 'João', date: '2024-10-01' }] },
        { id: 2, title: 'Dom Quixote', author: 'Miguel de Cervantes', price: 12.50, rating: 4.7, reviewCount: 350, image: 'https://example.com/donquixote.jpg', loans: [{ id: 2, user: 'Lucas', date: '2024-09-20' }] },
        { id: 3, title: '1984', author: 'George Orwell', price: 18.00, rating: 4.9, reviewCount: 800, image: 'https://example.com/1984.jpg', loans: [{ id: 3, user: 'Carlos', date: '2024-08-10' }] },
        { id: 4, title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', price: 8.00, rating: 4.6, reviewCount: 250, image: 'https://example.com/pequenoprincipe.jpg', loans: [{ id: 4, user: 'Beatriz', date: '2024-07-05' }] },
        { id: 5, title: 'Harry Potter e a Pedra Filosofal', author: 'J.K. Rowling', price: 20.00, rating: 4.8, reviewCount: 1000, image: 'https://example.com/harrypotter1.jpg', loans: [{ id: 5, user: 'Eduardo', date: '2024-06-20' }] },
        { id: 6, title: 'A Revolução dos Bichos', author: 'George Orwell', price: 10.50, rating: 4.7, reviewCount: 600, image: 'https://example.com/revolucaobichos.jpg', loans: [{ id: 6, user: 'Juliana', date: '2024-05-15' }] },
        { id: 7, title: 'O Hobbit', author: 'J.R.R. Tolkien', price: 14.99, rating: 4.9, reviewCount: 750, image: 'https://example.com/hobbit.jpg', loans: [{ id: 7, user: 'Fernanda', date: '2024-04-10' }] },
        { id: 8, title: 'Cem Anos de Solidão', author: 'Gabriel García Márquez', price: 22.00, rating: 4.9, reviewCount: 1200, image: 'https://example.com/cemanosdesolidão.jpg', loans: [{ id: 8, user: 'Rafael', date: '2024-03-01' }] },
        { id: 9, title: 'A Menina que Roubava Livros', author: 'Markus Zusak', price: 16.50, rating: 4.8, reviewCount: 650, image: 'https://example.com/meninadaroubalivros.jpg', loans: [{ id: 9, user: 'Gabriela', date: '2024-02-10' }] },
        { id: 10, title: 'O Código Da Vinci', author: 'Dan Brown', price: 25.00, rating: 4.7, reviewCount: 500, image: 'https://example.com/codigodavinci.jpg', loans: [{ id: 10, user: 'Felipe', date: '2024-01-15' }] },
        { id: 11, title: 'O Processo', author: 'Franz Kafka', price: 12.00, rating: 4.6, reviewCount: 300, image: 'https://example.com/processo.jpg', loans: [{ id: 11, user: 'Alana', date: '2024-01-10' }] },
        { id: 12, title: 'A Metamorfose', author: 'Franz Kafka', price: 9.00, rating: 4.8, reviewCount: 450, image: 'https://example.com/metamorfose.jpg', loans: [{ id: 12, user: 'Luana', date: '2023-12-20' }] },
        { id: 13, title: 'Orgulho e Preconceito', author: 'Jane Austen', price: 18.00, rating: 4.9, reviewCount: 800, image: 'https://example.com/orgulhoepreconceito.jpg', loans: [{ id: 13, user: 'Joana', date: '2023-11-25' }] },
        { id: 14, title: 'O Grande Gatsby', author: 'F. Scott Fitzgerald', price: 17.00, rating: 4.6, reviewCount: 700, image: 'https://example.com/grandegatsby.jpg', loans: [{ id: 14, user: 'Marcos', date: '2023-11-15' }] },
        { id: 15, title: 'Domínio Público', author: 'Vários', price: 5.00, rating: 4.5, reviewCount: 400, image: 'https://example.com/dominiopublico.jpg', loans: [{ id: 15, user: 'Ricardo', date: '2023-10-10' }] },
        { id: 16, title: 'O Corcunda de Notre-Dame', author: 'Victor Hugo', price: 15.00, rating: 4.7, reviewCount: 600, image: 'https://example.com/corcundadenotredame.jpg', loans: [{ id: 16, user: 'Clara', date: '2023-09-05' }] },
        { id: 17, title: 'Frankenstein', author: 'Mary Shelley', price: 13.00, rating: 4.6, reviewCount: 500, image: 'https://example.com/frankenstein.jpg', loans: [{ id: 17, user: 'Pedro', date: '2023-08-15' }] },
        { id: 18, title: 'Drácula', author: 'Bram Stoker', price: 16.00, rating: 4.8, reviewCount: 700, image: 'https://example.com/dracula.jpg', loans: [{ id: 18, user: 'Mariana', date: '2023-07-20' }] },
        { id: 19, title: 'O Retrato de Dorian Gray', author: 'Oscar Wilde', price: 14.00, rating: 4.7, reviewCount: 550, image: 'https://example.com/retratodoriangray.jpg', loans: [{ id: 19, user: 'Júlia', date: '2023-06-10' }] },
        { id: 20, title: 'As Aventuras de Sherlock Holmes', author: 'Arthur Conan Doyle', price: 19.00, rating: 4.9, reviewCount: 900, image: 'https://example.com/sherlockholmes.jpg', loans: [{ id: 20, user: 'Ricardo', date: '2023-05-05' }] }
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
