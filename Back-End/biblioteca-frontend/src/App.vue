<template>
  <div id="app">
    <!-- Sidebar -->
    <aside :class="{'sidebar': true, 'open': sidebarOpen}">
      <ul>
        <li><router-link to="/home" @click="toggleSidebar">Início</router-link></li>
        <li><router-link to="/produtos" @click="toggleSidebar">Produtos</router-link></li>
        <li><router-link to="/sobre" @click="toggleSidebar">Sobre</router-link></li>
        <li><router-link to="/login" @click="toggleSidebar">Entrar</router-link></li>
        <li><router-link to="/register" @click="toggleSidebar">Criar Conta</router-link></li>
      </ul>
    </aside>

    <!-- Navbar with hamburger icon -->
    <header class="navbar">
      <button @click="toggleSidebar" class="hamburger">
        ☰
      </button>
      <h1>MANGE BOOK</h1>
    </header>

    <!-- Main content -->
    <main>
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-left">
          <h4>MANGE BOOK</h4>
          <p>© 2024 Todos os direitos reservados.</p>
        </div>
        <div class="footer-middle">
          <ul>
            <li><router-link to="/home">Início</router-link></li>
            <li><router-link to="/produtos">Produtos</router-link></li>
            <li><router-link to="/sobre">Sobre</router-link></li>
          </ul>
        </div>
        <div class="footer-right">
      <p>Siga-nos:</p>
      <a><img src="/images/logofacebook.png" alt="Facebook" /></a>
      <a><img src="/images/logotwitter.png" alt="Twitter" /></a>
      <a><img src="/images/logoinstagram.png" alt="Instagram" /></a>
    </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
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
