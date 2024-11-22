<template>
    <HeaderElement />
    <div class="edit-book-page">
      <h2>Editar Livro</h2>
  
      <!-- Pergunta inicial -->
      <p>Qual livro deseja editar?</p>
      
      <!-- Seleção do livro -->
      <div class="book-selection">
        <select v-model="selectedBookId" @change="loadBookDetails">
          <option value="" disabled>Selecione um livro</option>
          <option v-for="book in books" :key="book.id" :value="book.id">
            {{ book.title }}
          </option>
        </select>
      </div>
  
      <!-- Formulário de edição -->
      <form v-if="selectedBook" @submit.prevent="updateBook">
        <label>
          Título:
          <input type="text" v-model="selectedBook.title" required />
        </label>
  
        <label>
          Autor:
          <input type="text" v-model="selectedBook.author" required />
        </label>
  
        <label>
          Descrição:
          <textarea v-model="selectedBook.description" required></textarea>
        </label>
  
        <label>
          Ano de Publicação:
          <input type="number" v-model="selectedBook.publicationYear" required />
        </label>
  
        <label>
          Gênero:
          <input type="text" v-model="selectedBook.genre" required />
        </label>
  
        <label>
          ISBN:
          <input type="text" v-model="selectedBook.isbn" required />
        </label>
  
        <label>
          Número de Cópias Disponíveis:
          <input type="number" v-model="selectedBook.availableCopies" required />
        </label>
  
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>

    <FooterElement />
  </template>
  
  <script>
  import axios from "axios";
  // Importando o HeaderElement e FooterElement
import HeaderElement from "@/components/HeaderElement.vue";
import FooterElement from "@/components/FooterElement.vue";
  
  export default {
    name: "EditBook",
  components: {
     HeaderElement, FooterElement
  },
    data() {
      return {
        books: [], // Lista de livros
        selectedBookId: "", // ID do livro selecionado
        selectedBook: null, // Detalhes do livro selecionado
      };
    },
    methods: {
      // Busca todos os livros
      async fetchBooks() {
        try {
          const response = await axios.get("http://localhost:5000/api/books");
          this.books = response.data;
        } catch (error) {
          console.error("Erro ao buscar livros:", error);
          alert("Erro ao carregar a lista de livros.");
        }
      },
  
      // Carrega os detalhes do livro selecionado
      async loadBookDetails() {
        if (!this.selectedBookId) return;
        try {
          const response = await axios.get(`http://localhost:5000/api/books/${this.selectedBookId}`);
          this.selectedBook = response.data;
        } catch (error) {
          console.error("Erro ao carregar detalhes do livro:", error);
          alert("Erro ao carregar os detalhes do livro.");
        }
      },
  
      // Atualiza os dados do livro
      async updateBook() {
        if (!this.selectedBook) return;
        try {
          await axios.put(`http://localhost:5000/api/books/${this.selectedBookId}`, this.selectedBook);
          alert("Livro atualizado com sucesso!");
          this.fetchBooks(); // Atualiza a lista de livros
        } catch (error) {
          console.error("Erro ao atualizar livro:", error);
          alert("Erro ao salvar as alterações.");
        }
      },
    },
    created() {
      this.fetchBooks(); // Carrega a lista de livros ao montar o componente
    },
  };
  </script>
  
  <style scoped>
  .edit-book-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .book-selection {
    margin-bottom: 20px;
  }
  
  select {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }
  
  input,
  textarea {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  textarea {
    resize: vertical;
  }
  
  button {
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  </style>
  