<template>
    <div class="about-container">
      <h1>Sobre o Mange Book</h1>
      <p>
        O <strong>Mange Book</strong> é um sistema de biblioteca online projetado para facilitar o acesso a livros e materiais de leitura para todos os usuários. Nossa missão é promover a leitura e o aprendizado, tornando a literatura mais acessível e disponível em qualquer lugar.
      </p>
  
      <h2>Nossas Funcionalidades</h2>
      <ul>
        <li>Cadastro fácil e rápido para novos usuários.</li>
        <li>Catálogo extenso de livros, organizado por categorias.</li>
        <li>Funcionalidade de busca eficiente para encontrar livros rapidamente.</li>
        <li>Opção de compra online dos livros.</li>
        <li>Avaliações dos usuários sobre os livros.</li>
      </ul>
  
      <h2>Nosso Compromisso</h2>
      <p>
        No Mange Book, acreditamos que a leitura é uma ferramenta poderosa que pode transformar vidas. Estamos comprometidos em fornecer uma plataforma amigável, segura e acessível para todos os amantes de livros. Junte-se a nós na jornada do conhecimento e da descoberta!
      </p>
  
      <div class="message">
        <router-link to="/register" class="cta">Comece agora sua jornada de leitura!</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage'
  };
  </script>
  
  <style scoped>
  .about-container {
    background: #fff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    max-width: 800px; /* Tamanho máximo do container */
    margin: 40px auto; /* Espaço de 40px acima e abaixo, e centraliza o conteúdo horizontalmente */
    line-height: 1.6; /* Melhora a legibilidade do texto */
  }
  
  .about-container h1 {
    color: #333;
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .about-container h2 {
    color: #4285f4;
    font-size: 1.5em;
    margin-top: 30px;
  }
  
  .about-container p {
    color: #555;
    font-size: 1.1em;
    margin: 10px 0;
  }
  
  .about-container ul {
    margin: 20px 0;
    padding-left: 20px;
  }
  
  .about-container ul li {
    margin-bottom: 10px;
    color: #555;
    font-size: 1.1em;
  }
  
  .message {
    text-align: center;
    margin-top: 30px;
  }
  
  .cta {
    background-color: #4285f4;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  
  .cta:hover {
    background-color: #4285f4; /* Efeito hover para o botão */
  }
  </style>
  