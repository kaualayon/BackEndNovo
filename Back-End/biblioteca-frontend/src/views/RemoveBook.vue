<template>
  <HeaderElement />
    <div class="remove-book-page">
  
      <!-- Fundo escuro -->
      <div class="background-overlay">
        <div class="content-container">
          <h2>Remover Livro</h2>
          <p>Selecione o livro que deseja remover:</p>
  
          <!-- Lista de livros -->
          <div v-if="books.length > 0" class="book-list">
            <div class="book-card" v-for="book in books" :key="book._id">
              <p><strong>Título:</strong> {{ book.title }}</p>
              <p><strong>Autor:</strong> {{ book.author }}</p>
              <p><strong>ISBN:</strong> {{ book.isbn }}</p>
              <button @click="removeBook(book._id)">Remover</button>
            </div>
          </div>
  
          <!-- Mensagem caso não existam livros -->
          <div v-else class="no-books">
            <p>Não há livros disponíveis para remover.</p>
          </div>
        </div>
      </div>
  
    </div>
    <FooterElement />
  </template>
  
  <script>
  import axios from 'axios';
  import HeaderElement from "@/components/HeaderElement.vue";
  import FooterElement from "@/components/FooterElement.vue";
  
  export default {
    components: {
      HeaderElement,
      FooterElement,
    },
    data() {
      return {
        books: [] // Lista de livros carregada do servidor
      };
    },
    created() {
      this.fetchBooks(); // Carregar livros ao criar o componente
    },
    methods: {
      // Busca todos os livros do backend
      async fetchBooks() {
        try {
          const response = await axios.get('http://localhost:5000/api/books');
          this.books = response.data;
        } catch (error) {
          console.error("Erro ao carregar livros:", error);
          alert("Erro ao carregar os livros.");
        }
      },
      // Remove um livro pelo ID
      async removeBook(bookId) {
        if (confirm("Tem certeza de que deseja remover este livro?")) {
          try {
            await axios.delete(`http://localhost:5000/api/books/${bookId}`);
            alert("Livro removido com sucesso!");
            this.fetchBooks(); // Atualiza a lista de livros após remoção
          } catch (error) {
            console.error("Erro ao remover o livro:", error);
            alert("Erro ao remover o livro.");
          }
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilo geral */
  .background-overlay {
    background-color: #f7f7f7;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  
  .content-container {
    max-width: 500px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .book-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
  }
  
  .book-card {
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .book-card p {
    margin: 5px 0;
  }
  
  button {
    padding: 8px 12px;
    background-color: #D32F2F;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #B71C1C;
  }
  
  .no-books {
    margin-top: 20px;
    color: #777;
  }
  </style>
  