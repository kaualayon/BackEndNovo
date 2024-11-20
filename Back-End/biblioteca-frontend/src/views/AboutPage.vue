<template>

<HeaderElement />
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
  
      
    </div>

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
  </template>
  
  <script>
import '../assets/css/style.css';

  export default {
    name: 'AboutPage',
    data() {
    return {
      sidebarOpen: false,
      cartCount: 0, // Contagem de itens no carrinho

    }},
    methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },

    updateCartCount() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      this.cartCount = cart.length; // Atualiza a contagem de itens
    },
    addToCart(book) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(book);
      localStorage.setItem('cart', JSON.stringify(cart));
      this.updateCartCount(); // Atualiza a contagem após adicionar
      alert(`${book.title} adicionado ao carrinho!`);
    },
    
    logout() {
    this.$router.push('/login'); // Redireciona para a página de login
  },
},
  mounted() {
    this.updateCartCount(); // Carrega a contagem de itens no carrinho

  }

}
  ;

  
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
  
  </style>
  