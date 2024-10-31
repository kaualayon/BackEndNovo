<template>
    <div class="cart-page">
      <h1>Carrinho de Compras</h1>
      
      <div v-if="cart.length === 0" class="empty-cart">
        <p>Seu carrinho está vazio.</p>
        <router-link to="/produtos" class="btn">Voltar às Compras</router-link>
      </div>
  
      <ul v-else class="cart-list">
        <li v-for="(book, index) in cart" :key="index" class="cart-item">
          <img :src="book.image" :alt="book.title" class="cart-item-image" />
          <div class="cart-item-details">
            <h3 class="cart-item-title">{{ book.title }}</h3>
            <p class="cart-item-author">Autor: {{ book.author }}</p>
            <button @click="removeFromCart(index)" class="remove-button">Remover</button>
          </div>
        </li>
      </ul>
  
      <button v-if="cart.length > 0" @click="finalizePurchase" class="checkout-button">Finalizar Compra</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
      };
    },
    methods: {
      removeFromCart(index) {
        this.cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(this.cart)); // Atualiza o local storage
      },
      finalizePurchase() {
        alert('Compra finalizada!'); // Placeholder alert
        this.cart = [];
        localStorage.setItem('cart', JSON.stringify(this.cart)); // Atualiza o local storage
      }
    }
  };
  </script>
  
  <style scoped>
  .cart-page {
    padding: 20px;
    font-family: Arial, sans-serif; /* Fonte mais agradável */
    max-width: 800px; /* Largura máxima da página */
    margin: 0 auto; /* Centraliza a página */
    background-color: #f9f9f9; /* Cor de fundo suave */
    border-radius: 10px; /* Bordas arredondadas */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
  }
  
  h1 {
    text-align: center; /* Centraliza o título */
    color: #333; /* Cor do título */
  }
  
  .empty-cart {
    text-align: center; /* Centraliza o texto para carrinho vazio */
    margin: 20px 0;
  }
  
  .btn {
    padding: 10px 20px;
    background-color: #007bff; /* Cor de fundo do botão */
    color: white; /* Cor do texto do botão */
    border: none;
    border-radius: 5px;
    text-decoration: none; /* Remove sublinhado do link */
  }
  
  .cart-list {
    list-style-type: none; /* Remove marcadores da lista */
    padding: 0; /* Remove padding da lista */
  }
  
  .cart-item {
    display: flex;
    align-items: center; /* Alinha os itens ao centro */
    margin-bottom: 20px;
    padding: 10px;
    background-color: #fff; /* Fundo branco para cada item */
    border-radius: 8px; /* Bordas arredondadas */
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); /* Sombra para os itens */
    transition: transform 0.2s; /* Transição suave ao passar o mouse */
  }
  
  .cart-item:hover {
    transform: scale(1.02); /* Leve aumento ao passar o mouse */
  }
  
  .cart-item-image {
    width: 75px; /* Largura da imagem */
    height: 100px; /* Altura da imagem */
    margin-right: 15px; /* Espaçamento à direita da imagem */
    border-radius: 5px; /* Bordas arredondadas na imagem */
  }
  
  .cart-item-details {
    flex-grow: 1; /* Permite que o contêiner ocupe o espaço disponível */
  }
  
  .cart-item-title {
    font-size: 1.2em; /* Tamanho do título */
    margin: 0; /* Remove margens do título */
    color: #333; /* Cor do título */
  }
  
  .cart-item-author {
    color: #555; /* Cor do autor */
  }
  
  .remove-button {
    background-color: #ff4c4c; /* Cor do botão remover */
    color: white; /* Cor do texto do botão */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px; /* Espaçamento interno do botão */
  }
  
  .checkout-button {
    display: block; /* Para que o botão ocupe toda a largura */
    margin: 20px auto; /* Centraliza o botão */
    padding: 10px 20px; /* Espaçamento do botão */
    background-color: #4285f4; /* Cor de fundo do botão de checkout */
    color: white; /* Cor do texto do botão */
    border: none;
    border-radius: 5px; /* Bordas arredondadas */
    font-size: 1.2em; /* Tamanho do texto */
    cursor: pointer; /* Cursor de ponteiro para o botão */
  }
  </style>
  