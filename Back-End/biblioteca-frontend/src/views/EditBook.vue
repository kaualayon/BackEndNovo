<template>
    <div class="edit-book-page">
      <HeaderElement />
  
      <!-- Fundo escuro -->
      <div class="background-overlay">
        <div class="content-container">
          <h2>Editar Livro</h2>
          <p>Selecione o livro que deseja editar:</p>
  
          <!-- Lista de livros -->
          <div v-if="books.length > 0" class="book-list">
            <div class="book-card" v-for="book in books" :key="book._id">
              <p><strong>Título:</strong> {{ book.title }}</p>
              <p><strong>Autor:</strong> {{ book.author }}</p>
              <button @click="selectBook(book)">Editar</button>
            </div>
          </div>
  
          <!-- Mensagem caso não existam livros -->
          <div v-else class="no-books">
            <p>Não há livros disponíveis para editar.</p>
          </div>
  
          <!-- Formulário de edição -->
          <div v-if="selectedBook" class="edit-form">
            <h3>Editando: {{ selectedBook.title }}</h3>
            <form @submit.prevent="updateBook">
              <div class="form-group">
                <label for="title">Título</label>
                <input v-model="selectedBook.title" id="title" type="text" required />
              </div>
              <div class="form-group">
                <label for="author">Autor</label>
                <input v-model="selectedBook.author" id="author" type="text" required />
              </div>
              <div class="form-group">
                <label for="description">Descrição</label>
                <textarea v-model="selectedBook.description" id="description" required></textarea>
              </div>
              <div class="form-group">
                <label for="publicationYear">Ano de Publicação</label>
                <input v-model="selectedBook.publicationYear" id="publicationYear" type="number" required />
              </div>
              <div class="form-group">
                <label for="genre">Gênero</label>
                <input v-model="selectedBook.genre" id="genre" type="text" required />
              </div>
              <div class="form-group">
                <label for="isbn">ISBN</label>
                <input v-model="selectedBook.isbn" id="isbn" type="text" required />
              </div>
              <div class="form-group">
                <label for="availableCopies">Cópias Disponíveis</label>
                <input v-model="selectedBook.availableCopies" id="availableCopies" type="number" required />
              </div>
              <button type="submit">Salvar Alterações</button>
              <button type="button" @click="cancelEdit">Cancelar</button>
            </form>
          </div>
        </div>
      </div>
  
      <FooterElement />
    </div>
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
        books: [], // Lista de livros
        selectedBook: null, // Livro selecionado para edição
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
      // Seleciona um livro para editar
      selectBook(book) {
        this.selectedBook = { ...book }; // Clona o livro para edição
      },
      // Atualiza o livro no backend
      async updateBook() {
        try {
          const { _id } = this.selectedBook;
          await axios.put(`http://localhost:5000/api/books/${_id}`, this.selectedBook);
          alert("Livro atualizado com sucesso!");
          this.selectedBook = null; // Reseta o formulário
          this.fetchBooks(); // Atualiza a lista de livros
        } catch (error) {
          console.error("Erro ao atualizar o livro:", error);
          alert("Erro ao atualizar o livro.");
        }
      },
      // Cancela a edição
      cancelEdit() {
        this.selectedBook = null;
      },
    },
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
    max-width: 600px;
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
    background-color: #0288d1;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0277bd;
  }
  
  .edit-form {
    margin-top: 20px;
    text-align: left;
  }
  
  .edit-form h3 {
    margin-bottom: 15px;
    font-size: 20px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button[type="submit"] {
    background-color: #4CAF50;
  }
  
  button[type="button"] {
    background-color: #f44336;
    margin-left: 10px;
  }
  </style>
  