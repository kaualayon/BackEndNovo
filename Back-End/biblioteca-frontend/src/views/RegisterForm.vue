<template>
    <div>
      <nav class="navbar">
        <ul class="nav-right">
          <li><a href="/App.vue">Início</a></li>
          <li><a href="/produtos.html">Produtos</a></li>
          <li><a href="/sobre.html">Sobre</a></li>
          <li><a href="/login.html">Entrar</a></li>
        </ul>
      </nav>
  
      <div class="login-page">
        <div class="login-form-container">
          <div class="login-header">
            <h2>Registrar na Zona dos Livros</h2>
            <p>Por favor, insira suas informações para criar uma conta.</p>
          </div>
          <form class="login-form">
            <label for="username">Nome de Usuário</label>
            <input type="text" id="username" placeholder="Seu nome de usuário" required />
  
            <label for="password">Senha</label>
            <input type="password" id="password" placeholder="Sua senha" required />
  
            <label>Gênero</label>
            <div class="radio-group">
              <label><input type="radio" name="gender" value="female" /> Feminino</label>
              <label><input type="radio" name="gender" value="male" /> Masculino</label>
            </div>
  
            <input type="submit" value="Registrar" />
          </form>
          <p class="message">Já registrado? <a href="/login.html">Entrar</a></p>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'RegisterForm'
};
</script>