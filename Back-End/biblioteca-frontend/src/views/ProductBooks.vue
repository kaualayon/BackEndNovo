<template>
  <div class="catalog-page">
    <!-- Incluindo o HeaderElement -->
    <HeaderElement />

    <!-- Título do Catálogo de Livros -->
    <h2 class="page-title">Catálogo de Livros</h2>

    <!-- Catálogo de Livros -->
    <div class="book-catalog">
      <div v-if="books.length === 0" class="no-books">
        <p>Não há livros disponíveis no catálogo.</p>
      </div>
      <div v-else>
        <div class="book-list">
          <div class="book-card" v-for="book in books" :key="book.id">
            <div class="book-image">
              <img :src="book.image" alt="Capa do livro" />
            </div>
            <h4>{{ book.title }}</h4>
            <p>{{ book.author }}</p>
            <button @click="viewBookDetails(book.id)">Ver Detalhes</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <FooterElement />
</template>

<script>
// Importando o HeaderElement
import HeaderElement from "@/components/HeaderElement.vue";
import FooterElement from "@/components/FooterElement.vue";

export default {
  components: {
    HeaderElement, FooterElement
  },
  data() {
    return {
      // Lista de livros com imagens para o catálogo
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
    };
  },
  methods: {
    viewBookDetails(bookId) {
      console.log(`Visualizando detalhes do livro com ID: ${bookId}`);
      // Lógica para redirecionar para a página de detalhes do livro, por exemplo:
      this.$router.push(`/book/${bookId}`);
    }
  }
}
</script>

<style scoped>
/* Estilo geral da página de catálogo */
.catalog-page {
  background-color: #f9f9f9;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Título do catálogo */
.page-title {
  font-size: 28px;
  font-weight: bold;
  color: #D32F2F;
  margin-bottom: 20px;
  text-align: center;
}

/* Seção de Catálogo de Livros */
.book-catalog {
  margin-top: 40px;
}

.book-catalog h3 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

/* Layout do catálogo de livros */
.book-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.book-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  max-width: 250px;
  margin: 0 auto;
}

.book-card:hover {
  transform: scale(1.05);
}

.book-card h4 {
  font-size: 18px;
  margin-bottom: 10px;
}

.book-card p {
  font-size: 16px;
  margin-bottom: 10px;
}

.book-card button {
  background-color: #D32F2F;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.book-card button:hover {
  background-color: #B71C1C;
}

.book-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

/* Seção sem livros */
.no-books {
  text-align: center;
  font-size: 16px;
  color: #777;
}

/* Media Queries para telas menores (responsividade) */
@media (max-width: 768px) {
  .book-card {
    width: 100%;
    max-width: 350px;
  }

  .book-list {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 24px;
  }

  .book-card {
    width: 90%;
    max-width: 400px;
  }
}
</style>
