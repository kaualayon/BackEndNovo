<template>
  <div class="admin-page">
    <!-- Header -->
    <header class="header">
      <h1 class="header-title">Administração - Mange Book</h1>
      
      <!-- Ícone de menu para abrir a sidebar -->
      <div class="menu-icon" @click="toggleSidebar">
        ☰
      </div>
    </header>

    <!-- Conteúdo principal -->
    <div class="main-container">
      <!-- Sidebar -->
      <div :class="{'sidebar': true, 'open': sidebarOpen}">
        <button class="close-btn" @click="toggleSidebar">X</button>
        <ul>
          <li><router-link to="/admin/dashboard">Dashboard</router-link></li>
          <li><router-link to="/admin/add-book">Adicionar Livros</router-link></li>
          <li><router-link to="/admin/manage-users">Gerenciar Usuários</router-link></li>
        </ul>
      </div>

      <!-- Overlay -->
      <div v-if="sidebarOpen" class="overlay" @click="toggleSidebar"></div>

      <!-- Dashboard Content -->
      <div class="content">
        <section class="dashboard">
          <h2>Visão Geral</h2>
          
          <!-- Div para agrupar os cards e centralizar -->
          <div class="dashboard-cards-container">
            <div class="dashboard-card">
              <h3>{{ booksCount }}</h3>
              <p>Total de Livros</p>
            </div>
            <div class="dashboard-card">
              <h3>{{ usersCount }}</h3>
              <p>Total de Usuários</p>
            </div>
            <div class="dashboard-card">
              <h3>{{ loansCount }}</h3>
              <p>Total de Empréstimos</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: false, // Estado para controlar a visibilidade da sidebar
      booksCount: 100, // Exemplo de contagem de livros
      usersCount: 50, // Exemplo de contagem de usuários
      loansCount: 30, // Exemplo de contagem de empréstimos
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen; // Alterna o estado da sidebar
    },
  },
};
</script>

<style scoped>
/* Resetando margens e padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Layout da página de admin */
.admin-page {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-container {
  display: flex;
  flex: 1;
  margin-left: 250px; /* Espaço para a sidebar */
  padding: 20px;
  width: 100%;
  justify-content: center; /* Alinha o conteúdo no centro */
}

/* Estilo do header */
.header {
  background-color: #D32F2F;
  color: white;
  padding: 15px 20px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between; /* Distribui os itens */
  align-items: center; /* Alinha os itens verticalmente */
}

/* Título do header */
.header-title {
  font-size: 24px;
  margin: 0;
  text-transform: uppercase;
}

/* Ícone do menu */
.menu-icon {
  font-size: 30px;
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
  border: none;
  color: white; /* Cor branca */
  transition: transform 0.3s ease-in-out;
}

.menu-icon:hover {
  transform: scale(1.2); /* Aumenta um pouco o ícone ao passar o mouse */
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: -250px; /* Inicialmente escondida à esquerda */
  width: 250px;
  height: 100%;
  background-color: #B71C1C; /* Tom de vermelho mais escuro para combinar com o cabeçalho */
  color: white;
  padding: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: left 0.3s ease-in-out;
}

.sidebar.open {
  left: 0; /* A sidebar desliza para a direita */
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

/* Overlay de fundo */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.overlay.active {
  display: block;
  opacity: 1;
}

/* Estilo do conteúdo */
.content {
  width: 100%;
  margin-top: 80px; /* Distância do topo para não sobrepor o header */
  text-align: center;
}

.dashboard {
  margin-top: 20px;
}

.dashboard h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

/* Agrupando os cards */
.dashboard-cards-container {
  display: flex;
  justify-content: center; /* Centraliza os cards */
  gap: 20px; /* Espaçamento entre os cards */
  flex-wrap: wrap; /* Permite que os cards se movam para a linha seguinte se necessário */
  max-width: 1000px; /* Define um tamanho máximo para a área dos cards */
  margin-left: auto;
  margin-right: auto;
}

/* Estilo dos cards */
.dashboard-card {
  background-color: #FFEBEE;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 250px; /* Limita o tamanho máximo do card */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.dashboard-card h3 {
  font-size: 32px;
  margin: 0;
}

.dashboard-card p {
  font-size: 16px;
  margin-top: 10px;
}
</style>
