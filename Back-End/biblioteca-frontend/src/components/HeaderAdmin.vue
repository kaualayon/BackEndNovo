<template>
    <header class="header-admin">
      <h1 class="header-title">Administração - MANGE BOOK</h1>
      <!-- Ícone de menu para abrir a sidebar -->
      <div class="menu-icon" @click="toggleSidebar">☰</div>
  
      <!-- Sidebar -->
      <div :class="{'sidebar': true, 'open': sidebarOpen}">
        <button class="close-btn" @click="toggleSidebar">X</button>
        <ul>
          <li><router-link to="/admin">Dashboard</router-link></li>
          <li><router-link to="/produtosAdmin">Catálogo de livros</router-link></li>
          <li><router-link to="/bookForm">Adicionar Livros</router-link></li>
          <li><router-link to="/adminUsersPage">Gerenciar Usuários</router-link></li>
        </ul>
      </div>
  
      <!-- Overlay para escurecer o fundo quando a sidebar estiver aberta -->
      <div v-if="sidebarOpen" class="overlay" @click="toggleSidebar"></div>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderAdmin",
    data() {
      return {
        sidebarOpen: false,
      };
    },
    methods: {
      toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos do HeaderAdmin.vue */
  .header-admin {
    background-color: #D32F2F;
    color: white;
    padding: 15px 20px;
    text-align: center;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
  
  /* Título do cabeçalho */
  .header-title {
    font-size: 24px;
    margin: 0;
    text-transform: uppercase;
  }
  
  /* Ícone de menu */
  .menu-icon {
    font-size: 30px;
    cursor: pointer;
    padding: 10px;
    background-color: transparent;
    border: none;
    color: white;
    transition: transform 0.3s ease-in-out;
  }
  
  .menu-icon:hover {
    transform: scale(1.2);
  }
  
  /* Sidebar */
  .sidebar {
    position: fixed;
    top: 0;
    left: -250px; /* Inicialmente escondida à esquerda */
    width: 250px;
    height: 100%;
    background-color: #B71C1C;
    color: white;
    padding: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: left 0.3s ease-in-out;
  }
  
  .sidebar.open {
    left: 0; /* Sidebar aparece */
  }
  
  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar li {
    margin: 20px 0;
    font-size: 18px;
  }
  
  .sidebar a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 10px;
    transition: background-color 0.2s ease;
    border-radius: 5px;
  }
  
  .sidebar a:hover {
    background-color: #FF6F6F;
  }
  
  .close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  
  /* Overlay */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: block;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  </style>
  