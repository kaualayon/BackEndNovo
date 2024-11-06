<template>
  <header class="header">
    <h1 class="header-title">Mange Book</h1>
    
    <!-- Barra de pesquisa alinhada à direita -->
    <div class="search-bar">
      <input type="text" placeholder="Buscar livros..." />
    </div>
    
    <!-- Ícone de menu para abrir a sidebar -->
    <div class="menu-icon" @click="toggleSidebar">
      ☰
    </div>
    
    <!-- Sidebar com botão de fechar -->
    <div v-if="sidebarOpen" class="sidebar">
      <button class="close-btn" @click="toggleSidebar">X</button>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/produtos">Produtos</router-link></li>
        <li><router-link to="/sobre">Sobre</router-link></li>
        <li><router-link to="/contato">Contato</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    }
  }
};
</script>

<style scoped>
/* Header principal */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #D32F2F; /* Tom avermelhado */
  color: white; /* Cor do texto branco */
  border-bottom: 1px solid #ccc;
  position: relative;
  z-index: 10;
}

.header-title {
  font-size: 24px;
  margin: 0;
}

/* Barra de pesquisa */
.search-bar {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.search-bar input {
  padding: 5px 10px;
  font-size: 16px;
}

/* Ícone do menu */
.menu-icon {
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
  border: none;
  color: white; /* Cor do ícone branco para visibilidade */
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: white;
  padding: 20px;
  transform: translateX(0);
  transition: transform 0.3s ease;
  z-index: 1000;
}

/* Lista de links na sidebar */
.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin: 20px 0;
}

/* Botão de fechar (X) na sidebar */
.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>
