<template>
    <div>
      <v-container>
        <v-data-table :items="books" :headers="headers" item-key="id">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Livros</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="newBook">Adicionar Livro</v-btn>
            </v-toolbar>
          </template>
        </v-data-table>
      </v-container>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        books: [],
        headers: [
          { text: 'Título', value: 'title' },
          { text: 'Autor', value: 'author' },
          { text: 'Gênero', value: 'genre' },
          { text: 'ISBN', value: 'isbn' },
        ],
      };
    },
    methods: {
      fetchBooks() {
        axios.get('http://localhost:5000/api/books').then(response => {
          this.books = response.data;
        });
      },
      newBook() {
        this.$router.push('/books/new');
      },
    },
    created() {
      this.fetchBooks();
    },
  };
  </script>
  
  <style scoped>
  .v-toolbar {
    background-color: #3f51b5;
    color: white;
  }
  </style>
  