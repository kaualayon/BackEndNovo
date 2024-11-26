<template>
    <HeaderElement />
    <div class="favorites-page">
  
      <div class="content">
        <h2>Meus Favoritos</h2>
  
        <!-- Mensagem quando não há livros favoritos -->
        <div v-if="favoriteBooks.length === 0" class="no-favorites">
          <p>Você ainda não adicionou nenhum livro aos favoritos.</p>
        </div>
  
        <!-- Lista de livros favoritos -->
        <div v-else class="book-list">
          <div class="book-card" v-for="book in favoriteBooks" :key="book.id">
            <img :src="book.imageUrl" alt="Capa do livro" class="book-image" />
            <h3>{{ book.title }}</h3>
            <p><strong>Autor:</strong> {{ book.author }}</p>
            <p><strong>Descrição:</strong> {{ book.description }}</p>
            <button @click="removeFromFavorites(book.id)">Remover dos Favoritos</button>
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
    components: {
      HeaderElement,
      FooterElement,
    },
    data() {
      return {
        favoriteBooks: [], // Livros favoritos do usuário
      };
    },
    created() {
        this.fetchFavorites();
    },
    methods: {
        async fetchFavorites() {
      try {
        const userId = localStorage.getItem('userId'); // Supondo que o ID do usuário está armazenado no localStorage
        const response = await axios.get(`http://localhost:5000/api/favorites/${userId}`);
        this.favorites = response.data.favorites;
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
        alert("Erro ao carregar a lista de favoritos.");
      }
    },
    },
  };
  </script>
  
  <style scoped>
  .favorites-page {
    background-color: #f7f7f7;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .content {
    max-width: 800px;
    width: 100%;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  
  h2 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 20px;
    color: #333;
  }
  
  .no-favorites {
    text-align: center;
    font-size: 16px;
    color: #666;
  }
  
  .book-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .book-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    padding: 15px;
  }
  
  .book-card h3 {
    font-size: 20px;
    margin-bottom: 5px;
  }
  
  .book-card p {
    margin: 5px 0;
  }
  
  button {
    padding: 8px 12px;
    background-color: #d32f2f;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #b71c1c;
  }
  </style>
  