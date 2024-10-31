<template>
    <div class="book-detail-container">
      <div class="book-image">
        <img :src="book.image" :alt="book.title" />
      </div>
      <div class="book-info">
        <h1>{{ book.title }}</h1>
        <p>Autor: {{ book.author }}</p>
        <p>Preço: R$ {{ book.price.toFixed(2) }}</p>
  
        <div class="ratings">
          <h2>Avaliações:</h2>
          <p>{{ book.rating }} ★</p>
          <p>{{ book.reviewCount }} avaliações</p>
        </div>
  
        <button @click="addToCart" class="add-to-cart">Adicionar ao Carrinho</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookDetail',
    data() {
      return {
        book: {
          id: 1,
          title: 'O Alquimista',
          author: 'Paulo Coelho',
          price: 29.90,
          rating: 4.7,
          reviewCount: 124,
          image: './images/o_alquimista.jpg', // Certifique-se de que a imagem esteja disponível
        },
      };
    },
    methods: {
      addToCart() {
        // Aqui você pode adicionar a lógica para adicionar o livro ao carrinho
        console.log(`${this.book.title} foi adicionado ao carrinho!`);
        alert(`${this.book.title} foi adicionado ao carrinho!`);
      },
    },
  };
  </script>
  
  <style scoped>
  .book-detail-container {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .book-image img {
    max-width: 300px;
    border-radius: 10px;
  }
  
  .book-info {
    max-width: 400px;
    margin-left: 20px;
  }
  
  .ratings {
    margin: 20px 0;
  }
  
  .add-to-cart {
    background-color: #4285f4;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .add-to-cart:hover {
    background-color: #357ae8;
  }
  </style>
  