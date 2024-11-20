<template>
  <HeaderElement />
  <div class="form-container">
    <h1 class="form-title">{{ isEditing ? "Editar Livro" : "Adicionar Livro" }}</h1>

    <form @submit.prevent="submitForm">
      <label for="title" class="form-label">Título:</label>
      <input type="text" id="title" v-model="book.title" class="form-input" required />

      <label for="author" class="form-label">Autor:</label>
      <input type="text" id="author" v-model="book.author" class="form-input" required />

      <label for="description" class="form-label">Descrição:</label>
      <textarea id="description" v-model="book.description" class="form-textarea" rows="4" required></textarea>

      <label for="publicationYear" class="form-label">Ano de Publicação:</label>
      <input type="number" id="publicationYear" v-model="book.publicationYear" class="form-input" min="0" required />

      <label for="genre" class="form-label">Gênero:</label>
      <input type="text" id="genre" v-model="book.genre" class="form-input" required />

      <label for="isbn" class="form-label">ISBN:</label>
      <input type="text" id="isbn" v-model="book.isbn" class="form-input" required />

      <label for="copiesAvailable" class="form-label">Número de Cópias Disponíveis:</label>
      <input type="number" id="copiesAvailable" v-model="book.copiesAvailable" class="form-input" min="0" required />

      <label for="image" class="form-label">Imagem de Capa</label>
      <input type="file" @change="handleImageUpload" id="image" class="form-input" accept="image/*" required />

      <button type="submit" class="form-button">{{ isEditing ? "Salvar Alterações" : "Adicionar Livro" }}</button>
    </form>
  </div>
  <FooterElement />
</template>


<script>
import axios from 'axios';
// Importa os componentes HeaderElement e FooterElement
import HeaderElement from '@/components/HeaderElement.vue';
import FooterElement from '@/components/FooterElement.vue';

export default {
  name: "BookForm",
  components: {
    HeaderElement, FooterElement
  },
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
/* Estilos gerais */
.form-container {
  background-color: #f9f9f9;
  padding: 45px;
  max-width: 600px;
  margin: 0 auto;
  color: #333;
}

/* Estilo do título (h1) */
.form-title {
  font-size: 28px;
  color: #D32F2F;
  text-align: center;
  margin-bottom: 20px;
}

/* Estilo dos rótulos (labels) */
.form-label {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
  display: block; /* Garante que os labels ocupem uma linha completa */
}

/* Estilos dos campos de entrada (input) */
.form-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

/* Estilo da área de texto (textarea) */
.form-textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical; /* Permite redimensionar apenas na vertical */
}

/* Estilos do botão */
.form-button {
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

.form-button:hover {
  background-color: #B71C1C;
}
</style>
