<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <h2>MANGE BOOK</h2>
        </div>
        <div class="footer-links">
          <ul>
            <li><a href="/produtos">Catálogo de Livros</a></li>
            <li><a href="/sobre">Sobre Nós</a></li>
            <li><a href="/contato">Contato</a></li>
            <li><a href="/ajuda">Ajuda</a></li>
          </ul>
        </div>
        <div class="footer-social">
          <a href="https://facebook.com" target="_blank" class="social-icon">Facebook</a>
          <a href="https://instagram.com" target="_blank" class="social-icon">Instagram</a>
          <a href="https://twitter.com" target="_blank" class="social-icon">Twitter</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 MANGE BOOK. Todos os direitos reservados.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterElement",
  };
  </script>
  
  <style scoped>
  /* Estilo geral do Footer */
  .footer {
    background-color: #2c3e50;
    color: #fff;
    padding: 20px;
    text-align: center;
  }
  
  /* Conteúdo principal do footer */
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  
  /* Logo do footer */
  .footer-logo h2 {
    font-size: 24px;
    font-weight: bold;
    color: #d32f2f;
    margin: 0;
  }
  
  /* Links do footer */
  .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 15px;
  }
  
  .footer-links a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    transition: color 0.3s;
  }
  
  .footer-links a:hover {
    color: #d32f2f;
  }
  
  /* Redes sociais */
  .footer-social {
    display: flex;
    gap: 20px;
  }
  
  .footer-social .social-icon {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    transition: color 0.3s;
  }
  
  .footer-social .social-icon:hover {
    color: #d32f2f;
  }
  
  /* Rodapé inferior */
  .footer-bottom {
    margin-top: 20px;
    font-size: 14px;
    color: #bbb;
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: center;
    }
  
    .footer-links ul {
      flex-direction: column;
      align-items: center;
    }
  
    .footer-social {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>
  