<template>
    <header class="header">
      <h1 class="header-title">Mange Book</h1>
      <input type="text" class="search-bar" placeholder="Pesquisar livros..." />
      <div class="menu-icon" @click="toggleSidebar">
        <!-- Ícone de três risquinhos -->
        <span></span>
        <span></span>
        <span></span>
      </div>
  
      <!-- Sidebar -->
      <aside class="sidebar" :class="{ 'is-active': sidebarActive }">
        <nav class="sidebar-menu">
          <a href="#home">Home</a>
          <a href="#categorias">Categorias</a>
          <a href="#favoritos">Favoritos</a>
          <a href="#perfil">Perfil</a>
          <a href="#sair">Sair</a>
        </nav>
      </aside>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sidebarActive: false
      };
    },
    methods: {
      toggleSidebar() {
        this.sidebarActive = !this.sidebarActive;
      }
    }
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #333;
    color: #fff;
  }
  
  .header-title {
    font-size: 1.5rem;
  }
  
  .search-bar {
    flex: 1;
    margin: 0 1rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: none;
  }
  
  .menu-icon {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .menu-icon span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #fff;
  }
  
  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
    background-color: #444;
    color: #fff;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    padding: 2rem;
  }
  
  .sidebar.is-active {
    transform: translateX(0);
  }
  
  .sidebar-menu a {
    display: block;
    padding: 1rem 0;
    color: #fff;
    text-decoration: none;
  }
  
  .sidebar-menu a:hover {
    background-color: #555;
  }
  </style>
  