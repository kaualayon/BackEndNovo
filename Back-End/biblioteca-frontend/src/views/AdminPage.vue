<template>
    <div>
      <!-- Navbar -->
      <header class="navbar">
        <button class="hamburger" @click="toggleSidebar">☰</button>
        <h1>Painel do Administrador</h1>
      </header>
  
      <!-- Sidebar -->
      <aside :class="['sidebar', { open: isSidebarOpen }]">
        <button class="sidebar-close" @click="toggleSidebar">X</button>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Livros</a></li>
          <li><a href="#">Usuários</a></li>
          <li><a href="#">Empréstimos</a></li>
          <li><a href="#">Configurações</a></li>
          <li><a href='/adminlogin'>Sair</a></li>
        </ul>
      </aside>
  
      <!-- Admin Panel -->
      <main class="admin-panel">
        <section class="content-section">
          <h2>Bem-vindo, Administrador</h2>
          <p>Gerencie o sistema da biblioteca com facilidade.</p>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isSidebarOpen: false,
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilo para garantir consistência */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Navbar */
  .navbar {
    background: #4285f4;
    color: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
  }
  
  .hamburger {
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    margin-right: 15px;
  }
  
  /* Sidebar */
  .sidebar {
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100%;
    background: #3d5b99;
    color: white;
    padding: 20px;
    transition: left 0.3s ease;
    z-index: 1000;
  }
  .sidebar.open {
    left: 0;
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  .sidebar ul li {
    margin: 20px 0;
  }
  .sidebar ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    padding: 10px;
    display: block;
    transition: background-color 0.3s, transform 0.3s;
  }
  .sidebar ul li a:hover {
    background-color: #2c4a77;
    transform: scale(1.05);
  }
  
  /* Botão de fechar o sidebar */
  .sidebar-close {
    background: none;
    border: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 15px;
  }
  
  /* Admin Panel */
  .admin-panel {
    margin-left: 0;
    padding: 20px;
    transition: margin-left 0.3s ease;
    min-height: 100vh;
    background-color: #f4f4f4;
  }
  .content-section {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    color: #333;
    max-width: 800px;
    margin: auto;
  }
  .content-section h2 {
    font-size: 1.8em;
    margin-bottom: 10px;
  }
  .content-section p {
    font-size: 1.1em;
    line-height: 1.6;
  }
  </style>
  