<template>
  <div>


    <HeaderElement /> <!-- Uso do componente Header -->
    <div>
      <!-- Carrossel de Produtos em Destaque -->
      <section class="section-2">
        <h2>Produtos em Destaque</h2>
        <div class="carousel">
          <div class="carousel-inner">
            <div
              v-for="(image, index) in featuredProducts"
              :key="index"
              class="carousel-item"
              :style="{ display: index === currentSlide ? 'block' : 'none' }"
            >
              <img :src="image.src" :alt="`img-${index + 1}`" />
            </div>
          </div>
          <button class="carousel-control prev" @click="prevSlide">❮</button>
          <button class="carousel-control next" @click="nextSlide">❯</button>
        </div>
      </section>
    </div>

    <section class="section-3">
      <h3>Autores com livros mais vendidos</h3>
      <div class="view-card">
        <div class="card" v-for="(card, index) in productCards" :key="index">
          <img :src="card.imgSrc" alt="Avatar">
          <div class="container">
            <h4><b>{{ card.name }}</b></h4>
            <p>{{ card.profession }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-4">
      <h2>Marcas em Destaque</h2>
      <div class="brands">
        <div class="brand" v-for="(brand, index) in featuredBrands" :key="index">
          <img :src="brand.src" :alt="`Logo ${index + 1}`">
        </div>
      </div>
    </section>

    <section class="section-5">
      <h2>Entre em Contato</h2>
      <p>Deixe-nos uma mensagem ou sugestão:</p>
      <form @submit.prevent="handleSubmit">
        <label for="fname">Nome</label>
        <input type="text" id="fname" v-model="formData.firstname" placeholder="Seu nome.." required>
        
        <label for="lname">Sobrenome</label>
        <input type="text" id="lname" v-model="formData.lastname" placeholder="Seu sobrenome.." required>
        
        <label for="country">País</label>
        <select id="country" v-model="formData.country" required>
          <option value="">Selecione um país</option>
          <option value="brasil">Brasil</option>
          <option value="australia">Austrália</option>
          <option value="canada">Canadá</option>
          <option value="usa">EUA</option>
        </select>
        
        <label for="subject">Assunto</label>
        <textarea id="subject" v-model="formData.subject" placeholder="Escreva algo.." style="height:170px" required></textarea>
        
        <input type="submit" value="Enviar">
      </form>
    </section>
  </div>

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <h4>MANGE BOOK</h4>
        <p>© 2024 Todos os direitos reservados.</p>
      </div>
      <div class="footer-middle">
        <ul>
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
</template>

<script>
import HeaderElement from '@/components/HeaderElement.vue';
import '../assets/css/style.css';
export default {
  name: 'HomePage',

  data() {
    return {
      sidebarOpen: false,
      featuredProducts: [
        { src: '/images/o_codigo_da_vinci.jpg' },
        { src: '/images/o_senhor_dos_aneis.jpg' },
        { src: '/images/dom_casmurro.jpg' },
      ],
      currentSlide: 0,
      productCards: [
        { imgSrc: '/images/machado_de_assis.jpg', name: 'Machado de Assis', profession: '85 livros vendidos' },
        { imgSrc: '/images/george_orwell.jpg', name: 'George Orwell', profession: '79 livros vendidos' },
      ],
      featuredBrands: [
        { src: '/images/marca1.png' },
        { src: '/images/marca2.png' },
        { src: '/images/marca3.jpg' },
      ],
      cartCount: 0, // Contagem de itens no carrinho
      formData: {
        firstname: '',
        lastname: '',
        country: '',
        subject: ''
      }
    };
  },

  mounted() {
    this.updateCartCount(); // Carrega a contagem de itens no carrinho
    this.startCarousel(); // Inicia o carrossel automático
  },

  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    handleSubmit() {
      if (!this.formData.firstname || !this.formData.lastname || !this.formData.country || !this.formData.subject) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }
      console.log("Formulário enviado:", this.formData);
      alert("Mensagem enviada!");

      this.formData.firstname = '';
      this.formData.lastname = '';
      this.formData.country = '';
      this.formData.subject = '';
    },

    startCarousel() {
      this.carouselInterval = setInterval(() => {
        this.nextSlide();
      }, 3000); // Muda o slide a cada 3 segundos
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.featuredProducts.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.featuredProducts.length) % this.featuredProducts.length;
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
      this.$router.push('/login');
    },

    components: {
    HeaderElement
  }
  }
};


</script>
