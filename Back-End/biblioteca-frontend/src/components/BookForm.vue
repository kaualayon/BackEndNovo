<template>
    <v-container>
      <v-form @submit.prevent="saveBook">
        <v-text-field v-model="book.title" label="Título" required></v-text-field>
        <v-text-field v-model="book.author" label="Autor" required></v-text-field>
        <v-text-field v-model="book.genre" label="Gênero"></v-text-field>
        <v-text-field v-model="book.isbn" label="ISBN"></v-text-field>
        <v-text-field v-model="book.quantity" label="Quantidade" type="number"></v-text-field>
        <v-btn color="primary" type="submit">Salvar</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        book: {
          title: '',
          author: '',
          genre: '',
          isbn: '',
          quantity: 0,
        },
      };
    },
    methods: {
      saveBook() {
        axios.post('http://localhost:5000/api/books', this.book)
          .then(() => {
            this.$router.push('/books');
          });
      },
    },
  };
  </script>
  