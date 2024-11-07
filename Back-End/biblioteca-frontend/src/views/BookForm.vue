<template>
  <div class="book-form">
    <!-- Título da Página -->
    <h1>{{ isEditing ? "Editar Livro" : "Adicionar Livro" }}</h1>

    <!-- Formulário de Adição/Edição -->
    <form @submit.prevent="submitForm">
      <!-- Campo Título -->
      <label for="title">Título:</label>
      <input type="text" id="title" v-model="book.title" required />

      <!-- Campo Autor -->
      <label for="author">Autor:</label>
      <input type="text" id="author" v-model="book.author" required />

      <!-- Campo Descrição -->
      <label for="description">Descrição:</label>
      <textarea id="description" v-model="book.description" rows="4" required></textarea>

      <!-- Campo Ano de Publicação -->
      <label for="publicationYear">Ano de Publicação:</label>
      <input type="number" id="publicationYear" v-model="book.publicationYear" min="0" required />

      <!-- Campo Gênero -->
      <label for="genre">Gênero:</label>
      <input type="text" id="genre" v-model="book.genre" required />

      <!-- Campo ISBN -->
      <label for="isbn">ISBN:</label>
      <input type="text" id="isbn" v-model="book.isbn" required />

      <!-- Campo Número de Cópias Disponíveis -->
      <label for="copiesAvailable">Número de Cópias Disponíveis:</label>
      <input type="number" id="copiesAvailable" v-model="book.copiesAvailable" min="0" required />

      <!-- Campo Imagem de Capa -->
      <label for="image">Imagem de Capa</label>
      <input type="file" @change="handleImageUpload" id="image" accept="image/*" required />

      <!-- Botão de Envio -->
      <button type="submit">{{ isEditing ? "Salvar Alterações" : "Adicionar Livro" }}</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "BookForm",
  data() {
    return {
      isEditing: false, // Define como true se estiver editando um livro
      book: {
        title: "",
        author: "",
        description: "",
        publicationYear: "",
        genre: "",
        isbn: "",
        copiesAvailable: 0,
        image: null // Inicializa a imagem como null
      },
    };
  },
  methods: {
    async submitForm() {
      if (this.isEditing) {
        // Chame um método para editar o livro (não implementado aqui)
        console.log("Salvando alterações:", this.book);
      } else {
        // Adiciona um novo livro
        await this.addBook();
      }
    },

    async addBook() {
      try {
        const formData = new FormData();
        formData.append('title', this.book.title);
        formData.append('author', this.book.author);
        formData.append('description', this.book.description);
        formData.append('publicationYear', this.book.publicationYear);
        formData.append('genre', this.book.genre);
        formData.append('isbn', this.book.isbn);
        formData.append('availableCopies', this.book.copiesAvailable);
        if (this.book.image) {
          formData.append('image', this.book.image); // Adiciona a imagem ao FormData
        }

        const response = await axios.post('http://localhost:5000/api/books/add', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Define o tipo de conteúdo como multipart
          },
        });
        if (response.status === 201) {
          this.$emit('bookAdded', response.data.book); // Emite o evento com o livro adicionado
          alert("Livro adicionado com sucesso!");
          this.clearForm();
          this.$parent.addBookToCatalog(response.data.book);
        }
      } catch (error) {
        console.error("Erro ao adicionar o livro:", error);
        alert("Erro ao adicionar o livro. Tente novamente.");
      }
    },

    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        console.log('Imagem selecionada:', file); // Verifique se o arquivo está correto
        this.book.image = file; // Agora estamos armazenando o arquivo de imagem
      }
    },

    clearForm() {
      // Limpa o formulário após a adição de um livro
      this.book = {
        title: "",
        author: "",
        description: "",
        publicationYear: "",
        genre: "",
        isbn: "",
        copiesAvailable: 0,
        image: null,
      };
    },
  },
};
</script>

<style scoped>
/* Estilos baseados no CSS do site */
.book-form {
  background-color: #f9f9f9;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  color: #333;
}

.book-form h1 {
  font-size: 28px;
  color: #D32F2F;
  text-align: center;
  margin-bottom: 20px;
}

.book-form label {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.book-form input,
.book-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.book-form button {
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

.book-form button:hover {
  background-color: #B71C1C;
}
</style>
