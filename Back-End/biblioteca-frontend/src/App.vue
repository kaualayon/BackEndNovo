<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <ul class="nav-right">
          <li><router-link to="/">Início</router-link></li>
          <li><router-link to="/produtos">Produtos</router-link></li>
          <li><router-link to="/sobre">Sobre</router-link></li>
          <li><router-link to="/login">Entrar</router-link></li>
          <li><router-link to="/register">Criar Conta</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view></router-view> <!-- Renderiza o componente correspondente à rota -->
    </main>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-left">
          <h4>MANGE BOOK</h4>
          <p>© 2024 Todos os direitos reservados.</p>
        </div>
        <div class="footer-middle">
          <ul>
            <li><router-link to="/">Início</router-link></li>
            <li><router-link to="/produtos">Produtos</router-link></li>
            <li><router-link to="/sobre">Sobre</router-link></li>
          </ul>
        </div>
        <div class="footer-right">
          <p>Siga-nos:</p>
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>