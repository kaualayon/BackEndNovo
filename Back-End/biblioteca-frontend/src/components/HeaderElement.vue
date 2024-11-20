<template>
  <header class="header">
    <div class="header-logo">
      <h1 class="header-title">Mange Book</h1>
      
      <!-- Ícone de menu para abrir a sidebar -->
      <div class="menu-icon" @click="toggleSidebar">
        ☰
      </div>
    </div>

    <!-- Barra de pesquisa com filtros -->
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Buscar livros..." />
      
      <div class="filter-container">
        <!-- Filtro de autor -->
        <select v-model="selectedAuthor" @change="applyFilters">
          <option value="">Autor</option>
          <option v-for="author in authors" :key="author" :value="author">{{ author }}</option>
        </select>

        <!-- Filtro de gênero -->
        <select v-model="selectedGenre" @change="applyFilters">
          <option value="">Gênero</option>
          <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
        </select>

        <!-- Filtro de data de publicação -->
        <input type="date" v-model="selectedPublicationDate" @change="applyFilters" />
      </div>
    </div>

    <!-- Ícone de notificações com contador após a barra de pesquisa -->
    <div class="notification-icon" @click="toggleNotifications">
      <span class="notification-count" v-if="notifications.length">{{ notifications.length }}</span>
      🔔 <!-- Ícone de sino para notificações -->
    </div>

    <!-- Lista de notificações -->
    <div v-if="notificationsOpen" class="notification-list">
      <h4>Notificações</h4>
      <ul>
        <li v-for="(notification, index) in notifications" :key="index">
          {{ notification }}
        </li>
      </ul>
      <button @click="clearNotifications">Limpar Notificações</button>
    </div>

    <!-- Sidebar com botão de fechar -->
    <div :class="{'sidebar': true, 'open': sidebarOpen}">
      <button class="close-btn" @click="toggleSidebar">X</button>
      <ul>
        <li><router-link to="/home">Dashboard</router-link></li>
        <li><router-link to="/notificacao">Notificações</router-link></li>
        <li><router-link to="/config">Configurações</router-link></li>
        <li><router-link to="/perfil">Conta</router-link></li>
      </ul>
      <button class="logout-btn" @click="logout">Sair</button>
    </div>

    <div v-if="sidebarOpen" class="overlay" @click="toggleSidebar"></div>
  </header>
</template>



<script>
export default {
  data() {
    return {
      sidebarOpen: false,
      notificationsOpen: false,
      notifications: [],
      searchQuery: '', // Armazena o termo de pesquisa
      selectedAuthor: '', // Filtro de autor
      selectedGenre: '', // Filtro de gênero
      selectedPublicationDate: '', // Filtro de data de publicação
      authors: ['Autor 1', 'Autor 2', 'Autor 3'], // Lista de autores (deve vir do back-end)
      genres: ['Ficção', 'Romance', 'Mistério'], // Lista de gêneros (deve vir do back-end)
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    toggleNotifications() {
      this.notificationsOpen = !this.notificationsOpen;
    },
    addNotification(message) {
      this.notifications.push(message);
    },
    clearNotifications() {
      this.notifications = [];
    },
    logout() {
      console.log("Usuário deslogado");
      localStorage.removeItem('user');
      this.$router.push('/login');
    },
    applyFilters() {
      // Aqui você pode chamar um método para filtrar a lista de livros
      console.log('Aplicando filtros:', this.searchQuery, this.selectedAuthor, this.selectedGenre, this.selectedPublicationDate);
      // Por exemplo, chamar uma API de busca filtrada ou filtrar localmente
    },
  },
  created() {
    this.addNotification("Livro reservado com sucesso!");
    this.addNotification("Adicionado à lista de desejos.");
  },
};
</script>

<style scoped>

/* Header principal */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #D32F2F;
  color: white;
  border-bottom: 1px solid #ccc;
  position: relative;
  z-index: 10;
   width: 100%; /* Garante que ocupe 100% da largura */
  box-sizing: border-box; /* Inclui padding e borda na largura total */
}

/* Div para agrupar logo e ícone de notificação */
.header-logo {
  display: flex;
  align-items: center;
}

.header-title {
  font-size: 24px;
  margin: 0;
  text-transform: uppercase;
  margin-right: 10px;
}

/* Barra de pesquisa */
.search-bar {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
  align-items: center;
}

/* Ajusta a posição do input e garante que o ícone fique dentro da caixa de pesquisa */
.search-bar input {
  padding: 5px 30px 5px 10px; /* Aumenta o padding à direita para dar espaço para a lupa */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 20px;
  width: 200px;
}


.filter-container {
  display: flex;
  gap: 10px;
  margin-left: 10px;
}

.filter-container select,
.filter-container input {
  padding: 5px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
/* Ícone de notificações */
.notification-icon {
  position: relative;
  font-size: 24px;
  cursor: pointer;
}

.notification-count {
  position: absolute;
  top: -5px;
  right: -10px;
  background: #FF6F6F;
  color: white;
  border-radius: 50%;
  padding: 2px 5px;
  font-size: 12px;
}

.notification-list {
  position: absolute;
  right: 20px;
  top: 60px;
  width: 250px;
  background: white;
  color: black;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.notification-list h4 {
  margin-top: 0;
}

.notification-list ul {
  list-style: none;
  padding: 0;
}

.notification-list li {
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}

.notification-list button {
  background-color: #FF6F6F;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
}

.notification-list button:hover {
  background-color: #D32F2F;
}

.menu-icon {
  font-size: 30px;
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
  border: none;
  color: white;
  z-index: 15;
  transition: transform 0.2s ease-in-out;
}

.menu-icon:hover {
  transform: scale(1.1);
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #B71C1C;
  color: white;
  padding: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: 0;
  transition: left 0.2s ease, opacity 0.2s ease;
}

.sidebar.open {
  left: 0;
  opacity: 1;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin: 20px 0;
  transition: background-color 0.2s ease, transform 0.2s ease;
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

.sidebar a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px 0;
  transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  border-radius: 5px;
}

.sidebar a:hover {
  background-color: #FF6F6F;
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.logout-btn {
  background-color: #FF6F6F;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-top: auto;
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.logout-btn:hover {
  background-color: #D32F2F;
}

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
  transition: opacity 0.2s ease-in-out;
}

.overlay.active {
  display: block;
  opacity: 1;
}

</style>
