<template>
    <div class="first-page">
      <h1>Selecione uma Opção</h1>
      <div class="options">
        <button @click="redirectTo('register')">Entrar como Cliente</button>
        <button @click="redirectTo('admin')">Entrar como Admin</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FirstPage',
    methods: {
      redirectTo(role) {
        if (role === 'register') {
          this.$router.push('/register'); // Redireciona para a página de registro
        } else if (role === 'admin') {
          this.$router.push('/admin'); // Redireciona para a página de administração
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .first-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
  }
  
  .options {
    display: flex;
    flex-direction: column;
    gap: 15px; /* Espaçamento entre os botões */
  }
  
  .options button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    background-color: #4285f4;
    color: white;
  }
  
  .options button:hover {
    background-color: #357ae8;
  }
  </style>
  