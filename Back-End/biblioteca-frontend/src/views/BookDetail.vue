<template>
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

      <div class="button-container">
        <button @click="reserveBook(book)">Reservar Livro</button> <!-- Botão para reservar o livro -->
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
</template>

<script>
export default {
  name: 'BookDetail',
  data() {
    return {
      books: [
        {
          id: 1,
          title: 'O Alquimista',
          author: 'Paulo Coelho',
          price: 29.90,
          rating: 4.7,
          reviewCount: 124,
          image: '../images/o_alquimista.jpg',
        },
        {
          id: 2,
          title: '1984',
          author: 'George Orwell',
          price: 39.90,
          rating: 4.8,
          reviewCount: 200,
          image: '../images/1984.jpg',
        },
        // ... outros livros
      ],
      book: null,
      userReview: '',
      comments: [],
      nextCommentId: 1,
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
  },
};
</script>

<style scoped>
.book-detail-container {
  display: flex;
  justify-content: space-around;
  padding: 30px;
  max-width: 900px;
  margin: 20px auto;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
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
  font-size: 1.8em;
  color: #333;
  margin-bottom: 10px;
}

.author {
  font-size: 1.1em;
  color: #555;
}

.price {
  font-size: 1.4em;
  color: #d9534f;
  margin: 10px 0;
}

.ratings {
  margin: 20px 0;
}

.button-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.reserve-button,
.add-to-wishlist,
.share-button,
.submit-review {
  background-color: #4285f4;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.reserve-button:hover,
.add-to-wishlist:hover,
.share-button:hover,
.submit-review:hover {
  background-color: #357ae8;
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
  background-color: #e9ecef;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
}
</style>
