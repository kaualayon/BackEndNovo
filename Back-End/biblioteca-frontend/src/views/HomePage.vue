<template>
  <div>
    <header class="navbar">
      <div class="sidebar" :class="{ open: sidebarOpen }">
        <button class="sidebar-close" @click="toggleSidebar">&times;</button>
        <ul>
          <li><router-link to="/">Início</router-link></li>
          <li><router-link to="/produtos">Produtos</router-link></li>
          <li><router-link to="/contato">Contato</router-link></li>
          <!-- Adicione mais links conforme necessário -->
        </ul>
      </div>
    </header>

    <header class="section-1">
      <div class="section-1-text">
        <h1>Bem-vindo ao MANGE BOOK!</h1>
        <p>Aqui você encontra os livros que procura.</p>
        <router-link to="/produtos" class="btn">Explore Aqui <i class="fa fa-arrow-right" aria-hidden="true"></i></router-link>
      </div>
    </header>

    <section class="section-2">
      <h2>Produtos em Destaque</h2>
      <div class="gallery">
        <div class="image-holder" v-for="(image, index) in featuredProducts" :key="index">
          <a href="#"><img :src="image.src" :alt="`img-${index + 1}`"></a>
        </div>
      </div>
    </section>

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
</template>

<script>
export default {
  name: 'HomePage',
  
  data() {
    return {
      sidebarOpen: false, // Controla a visibilidade do sidebar
      featuredProducts: [
        { src: './images/o_codigo_da_vinci.jpg' },
        { src: './images/o_senhor_dos_aneis.jpg' },
        { src: './images/dom_casmurro.jpg' },
      ],
      productCards: [
        { imgSrc: './images/machado_de_assis.jpg', name: 'Machado de Assis', profession: '85 livros vendidos' },
        { imgSrc: './images/george_orwell.jpg', name: 'George Orwell', profession: '79 livros vendidos' },
      ],
      featuredBrands: [
        { src: './images/marca1.png' },
        { src: './images/marca2.png' },
        { src: './images/marca3.jpg' },
      ],
      formData: {
        firstname: '',
        lastname: '',
        country: '',
        subject: ''
      }
    };
  },
  
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen; // Alterna a visibilidade do sidebar
    },
    handleSubmit() {
      // Verificação de campos obrigatórios
      if (!this.formData.firstname || !this.formData.lastname || !this.formData.country || !this.formData.subject) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      console.log("Formulário enviado:", this.formData);
      alert("Mensagem enviada!");

      // Limpar os campos do formulário
      this.formData.firstname = '';
      this.formData.lastname = '';
      this.formData.country = '';
      this.formData.subject = '';
    }
  }
};
</script>
