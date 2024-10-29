<template>
    <div>
      <nav class="navbar">
        <ul class="nav-right">
          <li><a href="/home">Início</a></li>
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

<style scoped>
/* Reset básico para garantir consistência entre navegadores */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Estilo para o corpo da página */
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f0f2f5; /* Cor de fundo da página */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Ocupa toda a altura da viewport */
    margin: 0;
  }
  
  /* Estilo para a barra de navegação */
  .navbar {
    background: #ff5722; /* Cor de fundo da barra de navegação */
    color: #fff;
    padding: 15px 30px;
    width: 100%;
    position: fixed; /* Fixa a barra de navegação no topo */
    top: 0;
    left: 0;
    text-align: center;
    z-index: 1000; /* Garante que a barra esteja acima do conteúdo */
  }
  
  .navbar .nav-right {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .navbar .nav-right li {
    display: inline;
    margin: 0 15px;
  }
  
  .navbar .nav-right a {
    color: #fff;
    text-decoration: none;
    padding: 10px 15px;
    font-size: 1em;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .navbar .nav-right a:hover {
    background-color: #e64a19; /* Efeito hover para links da navegação */
    border-radius: 5px;
    color: #fff;
  }
  
  /* Estilo para o container do formulário de login */
  .login-form-container {
    background: #fff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px; /* Tamanho máximo do container */
    margin-top: 80px; /* Espaço para não ficar sob a navbar */
  }
  
  /* Estilo para o cabeçalho do formulário de login */
  .login-header {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .login-header h2 {
    margin-bottom: 10px;
    color: #333;
    font-size: 1.8em;
  }
  
  .login-header p {
    color: #777;
    font-size: 1.1em;
  }
  
  /* Estilo para o formulário de login */
  .login-form {
    display: flex;
    flex-direction: column;
  }
  
  .login-form label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
    font-size: 0.9em;
  }
  
  .login-form input[type="text"],
  .login-form input[type="password"] {
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1em;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  
  .login-form input[type="text"]:focus,
  .login-form input[type="password"]:focus {
    border-color: #ff5722;
    box-shadow: 0 0 5px rgba(255, 87, 34, 0.3);
    outline: none;
  }
  
  .login-form input[type="submit"] {
    background-color: #ff5722;
    color: #fff;
    border: none;
    padding: 15px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .login-form input[type="submit"]:hover {
    background-color: #e64a19;
    transform: translateY(-2px);
  }
  
  .login-form input[type="submit"]:active {
    background-color: #d84315;
    transform: translateY(0);
  }
  
  /* Estilo para a mensagem de login */
  .message {
    margin-top: 20px;
    text-align: center;
  }
  
  .message p {
    color: #777;
    font-size: 1em;
  }
  
  .message a {
    color: #ff5722;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .message a:hover {
    color: #e64a19;
    text-decoration: underline;
  }
  
  
</style>