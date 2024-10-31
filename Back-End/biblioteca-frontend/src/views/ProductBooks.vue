<template>
  <div>
    <!-- Sidebar -->
    <aside :class="{'sidebar': true, 'open': sidebarOpen}">
      <ul>
        <li><router-link to="/home" @click="toggleSidebar">Início</router-link></li>
        <li><router-link to="/sobre" @click="toggleSidebar">Sobre</router-link></li>
      </ul>
    </aside>

    <!-- Navbar with hamburger icon -->
    <header class="navbar">
      <button @click="toggleSidebar" class="hamburger">
        ☰
      </button>
      <h1>MANGE BOOK</h1>
      <router-link to="/cart" class="cart-icon">
        <i class="fa fa-shopping-cart"></i>
        <span class="cart-count">{{ cartCount }}</span> <!-- Mostra a contagem de itens -->
      </router-link>
      <button @click="logout" class="logout-button">Sair</button>
    </header>


    <header class="section-1">
      <h1>Livros Disponíveis</h1>
      <input
        type="text" class="pesquisar-livros"
        placeholder="Pesquisar livros..."
        v-model="searchQuery"
        @input="filterBooks"
      />
    </header>

    <section class="section-2">
      <h2>Resultados da Busca</h2>
      <div class="gallery">
        <div
          class="image-holder"
          v-for="book in filteredBooks"
          :key="book.id"
        >
          <router-link :to="`/book/${book.id}`">
            <img :src="book.image" :alt="book.title" />
            <p>{{ book.title }}</p>
            <p>Autor: {{ book.author }}</p>
          </router-link>
        </div>
      </div>
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
            <li><router-link to="/home">Início</router-link></li>
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
import '../assets/css/style.css';



export default {
  data() {
    return {
      sidebarOpen: false,
      searchQuery: '',
      books: [
        { id: 1, title: 'O Alquimista', author: 'Paulo Coelho', image: './images/o_alquimista.jpg' },
        { id: 2, title: '1984', author: 'George Orwell', image: './images/1984.jpg' },
        { id: 3, title: 'Dom Casmurro', author: 'Machado de Assis', image: './images/dom_casmurro.jpg' },
        { id: 4, title: 'A Moreninha', author: 'Joaquim Manuel de Macedo', image: './images/a_moreninha.jpg' },
        { id: 5, title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', image: './images/o_pequeno_principe.jpg' },
        { id: 6, title: 'Cem Anos de Solidão', author: 'Gabriel García Márquez', image: './images/cem_anos_de_solidao.jpg' },
        { id: 7, title: 'A Revolução dos Bichos', author: 'George Orwell', image: './images/a_revolucao_dos_bichos.jpg' },
        { id: 8, title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', image: './images/o_senhor_dos_aneis.jpg' },
        { id: 9, title: 'Fahrenheit 451', author: 'Ray Bradbury', image: './images/fahrenheit_451.jpg' },
        { id: 10, title: 'A Menina que Roubava Livros', author: 'Markus Zusak', image: './images/a_menina_que_roubava_livros.jpg' },
        { id: 11, title: 'O Sol é para Todos', author: 'Harper Lee', image: './images/o_sol_e_para_todos.jpg' },
        { id: 12, title: 'Orgulho e Preconceito', author: 'Jane Austen', image: './images/orgulho_e_preconceito.jpg' },
        { id: 13, title: 'O Hobbit', author: 'J.R.R. Tolkien', image: './images/o_hobbit.jpg' },
        { id: 14, title: 'O Conto da Aia', author: 'Margaret Atwood', image: './images/o_conto_da_aia.jpg' },
        { id: 15, title: 'A Sombra do Vento', author: 'Carlos Ruiz Zafón', image: './images/a_sombra_do_vento.jpg' },
        { id: 16, title: 'Os Miseráveis', author: 'Victor Hugo', image: './images/os_miseraveis.jpg' },
        { id: 17, title: 'O Lobo da Estepe', author: 'Hermann Hesse', image: './images/o_lobo_da_estepe.jpg' },
        { id: 18, title: 'Crime e Castigo', author: 'Fiódor Dostoiévski', image: './images/crime_e_castigo.jpg' },
        { id: 19, title: 'A Insustentável Leveza do Ser', author: 'Milan Kundera', image: './images/a_insustentavel_leveza_do_ser.jpg' },
        { id: 20, title: 'O Código Da Vinci', author: 'Dan Brown', image: './images/o_codigo_da_vinci.jpg' },
      ],
      filteredBooks: [],
      cartCount: 0, // Contagem de itens no carrinho
    };
  },
  methods: {
    filterBooks() {
      this.filteredBooks = this.books.filter((book) =>
        book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
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
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },

    logout() {
    this.$router.push('/login'); // Redireciona para a página de login
  },
    
  },
  mounted() {
    this.updateCartCount(); // Carrega a contagem de itens no carrinho
    this.filteredBooks = this.books; // Inicialmente, exibir todos os livros
  },
};
</script>

<style scoped>
.pesquisar-livros { /* Adicione a classe do elemento aqui */
    position: relative; /* Para que os elementos fiquem acima da sobreposição */
    z-index: 2; /* Coloca os elementos acima da sobreposição */
}
</style>
