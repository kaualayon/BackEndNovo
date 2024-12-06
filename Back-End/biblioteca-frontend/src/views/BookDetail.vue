<template>
  <HeaderElement />
  <div>
    <div v-if="isLoading" class="loading">
      Carregando detalhes do livro...
    </div>

    <div class="book-detail-container" v-else-if="book">
      <div class="book-image">
        <img :src="book.image" :alt="book.title" />
      </div>
      <div class="book-info">
        <h1>{{ book.title }}</h1>
        <p class="author">Autor: {{ book.author }}</p>
        <p class="description">{{ book.description }}</p>
        <div class="ratings">
          <h2>Avaliações:</h2>
          <div class="rating-stars">
            <p>{{ book.rating }} ★</p>
            <p>{{ book.reviewCount }} avaliações</p>
          </div>
        </div>
        <div class="button-container">
          <button @click="reserveBook(book)" class="reserve-button">
            Reservar Livro
          </button>
          <button @click="borrowBook(book)" class="borrow-button">
            Emprestar Livro
          </button>
          <button @click="addToWishlist" class="add-to-wishlist">
            Adicionar à Lista de Desejos
          </button>
        </div>
        <div class="user-review">
          <h2>Deixe sua avaliação:</h2>
          <div class="star-rating">
            <span
              v-for="star in 5"
              :key="star"
              class="star"
              @click="setRating(star)"
            >
              <span :class="{ filled: star <= userRating }">★</span>
            </span>
          </div>
          <textarea
            v-model="userReview"
            placeholder="Escreva sua avaliação aqui..."
            rows="4"
          ></textarea>
          <button @click="submitReview" class="submit-review">
            Enviar Avaliação
          </button>
        </div>
        <div class="comments">
          <h2>Comentários:</h2>
          <ul>
            <li v-for="comment in comments" :key="comment.id">
              {{ comment.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <FooterElement />
</template>

<script>
import HeaderElement from "@/components/HeaderElement.vue";
import FooterElement from "@/components/FooterElement.vue";
import axios from "axios";

export default {
  name: "BookDetail",
  components: { HeaderElement, FooterElement },
  props: ["id"],
  data() {
    return {
      book: null,
      userRating: 0,
      userReview: "",
      comments: [],
      isLoading: true, // Controla o estado de carregamento
    };
  },
  async created() {
    const bookId = this.$route.params.id;

    try {
      const response = await axios.get(
        `http://localhost:5000/api/books/${bookId}`
      ); // Substitua pela rota do seu backend
      this.book = response.data;
    } catch (error) {
      console.error("Erro ao carregar o livro:", error);
    } finally {
      this.isLoading = false;
    }
  },
  methods: {
    reserveBook(book) {
      alert(`Você reservou: ${book.title}`);
    },
    borrowBook(book) {
      alert(`Você pegou emprestado: ${book.title}`);
    },
    addToWishlist() {
      alert("Livro adicionado à lista de desejos.");
    },
    setRating(star) {
      this.userRating = star;
    },
    submitReview() {
      if (this.userReview && this.userRating) {
        this.comments.push({
          id: this.comments.length + 1,
          text: this.userReview,
        });
        this.userReview = "";
      }
    },
  },
};
</script>

<style scoped>
/* Reset básico de margens e padding */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.loading {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 50px;
}
/* Cor de fundo e fonte principal */
body {
  background-color: #f4f7fb;
  color: #333;
}

/* Contêiner principal do detalhe do livro */
.book-detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 30px;
  margin: 40px auto;
  max-width: 900px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Imagem do livro */
.book-image img {
  max-width: 250px;
  max-height: 350px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

/* Informação do livro */
.book-info {
  margin-top: 20px;
  width: 80%;
  text-align: left;
}

/* Títulos do livro */
h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}

/* Autor do livro */
.author {
  font-size: 1.1rem;
  color: #777;
  font-style: italic;
  margin-bottom: 15px;
  text-align: center;
}

/* Seção de avaliações */
.ratings {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rating-stars p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 10px;
}

/* Botões de ação */
.button-container {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 25px;
}

.button-container button {
  padding: 12px 20px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.reserve-button {
  background-color: #4caf50;
  color: white;
}

.reserve-button:hover {
  background-color: #45a049;
}

.borrow-button {
  background-color: #007bff;
  color: white;
}

.borrow-button:hover {
  background-color: #0056b3;
}

.add-to-wishlist {
  background-color: #ff9800;
  color: white;
}

.add-to-wishlist:hover {
  background-color: #e68900;
}

.share-button {
  background-color: #888;
  color: white;
}

.share-button:hover {
  background-color: #666;
}

/* Avaliação do usuário */
.user-review {
  margin-top: 30px;
}

.star-rating {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.star {
  cursor: pointer;
  font-size: 2rem;
  color: #ddd;
  transition: color 0.3s ease;
}

.star.filled {
  color: #f39c12;
}

textarea {
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border 0.3s ease;
}

textarea:focus {
  border-color: #007bff;
}

/* Botão de enviar avaliação */
.submit-review {
  margin-top: 20px;
  padding: 12px 25px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-review:hover {
  background-color: #0056b3;
}

/* Seção de comentários */
.comments {
  margin-top: 30px;
  width: 90%;
  text-align: left;
  padding-top: 15px;
  border-top: 1px solid #ddd;
}

.comments ul {
  list-style: none;
  padding: 0;
}

.comments li {
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  color: #444;
}

.comments li:last-child {
  border-bottom: none;
}
</style>

