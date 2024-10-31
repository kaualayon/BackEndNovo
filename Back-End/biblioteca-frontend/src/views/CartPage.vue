<template>
    <div class="cart-page">
      <h1>Carrinho de Compras</h1>
      
      <div v-if="cart.length === 0">
        <p>Seu carrinho está vazio.</p>
      </div>
  
      <ul v-else>
        <li v-for="(book, index) in cart" :key="index" class="cart-item">
          <img :src="book.image" :alt="book.title" />
          <div>
            <h3>{{ book.title }}</h3>
            <p>Autor: {{ book.author }}</p>
            <button @click="removeFromCart(index)">Remover</button>
          </div>
        </li>
      </ul>
  
      <button v-if="cart.length > 0" @click="finalizePurchase">Finalizar Compra</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Assume this array is populated from somewhere, like local storage or a previous page
        cart: JSON.parse(localStorage.getItem('cart')) || [],
      };
    },
    methods: {
      removeFromCart(index) {
        this.cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(this.cart)); // Update local storage
      },
      finalizePurchase() {
        // Implement your checkout logic here
        alert('Compra finalizada!'); // Placeholder alert
        // Clear the cart
        this.cart = [];
        localStorage.setItem('cart', JSON.stringify(this.cart)); // Update local storage
      }
    }
  };
  </script>
  
  <style scoped>
  .cart-page {
    padding: 20px;
  }
  
  .cart-item {
    display: flex;
    margin-bottom: 15px;
  }
  
  .cart-item img {
    width: 50px;
    height: 75px;
    margin-right: 15px;
  }
  </style>
  