<template>
  <div>
    <nav class="navbar">
      <ul class="nav-right">
        <li><a href="/index.html">Início</a></li>
        <li><a href="/produtos.html">Produtos</a></li>
        <li><a href="/sobre.html">Sobre</a></li>
        <li><a href="/login.html">Entrar</a></li>
        <li><a href="/registro.html">Criar Conta</a></li>
      </ul>
    </nav>

    <header class="section-1">
      <div class="section-1-text">
        <h1>Bem-vindo ao MANGE BOOK!</h1>
        <p>Aqui você encontra os livros que procura.</p>
        <a href="/produtos.html" class="btn">Explore Aqui <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
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
      <h3>Produtos</h3>
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
        <input type="text" id="fname" v-model="formData.firstname" placeholder="Seu nome..">
        <label for="lname">Sobrenome</label>
        <input type="text" id="lname" v-model="formData.lastname" placeholder="Seu sobrenome..">
        <label for="country">País</label>
        <select id="country" v-model="formData.country">
          <option value="brasil">Brasil</option>
          <option value="australia">Austrália</option>
          <option value="canada">Canadá</option>
          <option value="usa">EUA</option>
        </select>
        <label for="subject">Assunto</label>
        <textarea id="subject" v-model="formData.subject" placeholder="Escreva algo.." style="height:170px"></textarea>
        <input type="submit" value="Enviar">
      </form>
    </section>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-left">
          <h4>MANGE BOOK</h4>
          <p>© 2024 Todos os direitos reservados.</p>
        </div>
        <div class="footer-middle">
          <ul>
            <li><a href="/index.html">Início</a></li>
            <li><a href="/produtos.html">Produtos</a></li>
            <li><a href="/sobre.html">Sobre</a></li>
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
  data() {
    return {
      featuredProducts: [
        { src: './images/img_2.jpg' },
        { src: './images/img_3.jpeg' },
        { src: './images/img_4.jpg' },
        // Adicione os demais produtos aqui
      ],
      
      productCards: [
        { imgSrc: './images/img_11.jpg', name: 'João da Silva', profession: 'Arquiteto & Engenheiro' },
        { imgSrc: './images/img_11.jpg', name: 'João da Silva', profession: 'Arquiteto & Engenheiro' },
        // Adicione outros cards de produtos aqui
      ],
      featuredBrands: [
        { src: './images/book_logo1.png' },
        { src: './images/book_logo_6.png' },
        { src: './images/book_logo3.png' },
        // Adicione outras marcas aqui
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
    handleSubmit() {
      console.log("Formulário enviado:", this.formData);
      alert("Mensagem enviada!");
    }
  }
};
</script>

<style src="@/assets/css/style.css"></style>

