<template>

  <!-- Incluindo o HeaderElement -->
  <HeaderElement />

  <!-- Saudação ao usuário -->
  <div class="welcome-message" v-if="username">
      <h2>Bem-vindo, {{ username }}!</h2>
      <p>Estamos felizes em tê-lo de volta. Explore nossos recursos abaixo.</p>
    </div>

    <!-- Título da HomePage -->
    <h2 class="page-title">Dashboard</h2>

   <!-- Status de Empréstimos, Devoluções e Reservas -->
   <div class="status-cards">
      <div class="status-card">
        <h3>Empréstimos Ativos</h3>
        <p class="status-number">{{ activeLoans }}</p>
        <p class="status-info">Livros emprestados atualmente</p>
      </div>

      <div class="status-card">
        <h3>Devoluções Pendentes</h3>
        <p class="status-number">{{ pendingReturns }}</p>
        <p class="status-info">Livros aguardando devolução</p>
      </div>

      <div class="status-card">
        <h3>Reservas</h3>
        <p class="status-number">{{ activeReservations }}</p>
        <p class="status-info">Livros reservados</p>
      </div>
    </div>
    <!-- Botões para Adicionar e Editar Livros -->
    <div class="catalog-actions">
        <router-link to="/AdminUsersPage">
          <button class="action-btn">Gerenciar Usuários</button>
        </router-link>
      </div>


  
  <div class="catalog-page">
    

    <!-- Título do Catálogo de Livros -->
    <h2 class="page-title">Catálogo de Livros</h2>

    <!-- Botões para Adicionar e Editar Livros -->
    <div class="catalog-actions">
        <router-link to="/BookForm">
          <button class="action-btn">Adicionar Livro</button>
        </router-link>
        <router-link to="/editarLivro">
          <button class="action-btn">Editar Livro</button>
        </router-link>
        <router-link to="/removerLivro">
          <button class="action-btn">Remover Livro</button>
        </router-link>
      </div>

    <!-- Catálogo de Livros -->
    <div class="book-catalog">
      <div v-if="books.length === 0" class="no-books">
        <p>Não há livros disponíveis no catálogo.</p>
      </div>
      <div v-else>
        <div class="book-list">
          <div class="book-card" v-for="book in books" :key="book.id">
            <div class="book-image">
              <img :src="getImageSrc(book.image)" alt="Capa do Livro" v-if="book.image" />


            </div>
            <h4>{{ book.title }}</h4>
            <p>{{ book.author }}</p>
            <p>Quantidade Disponível: <span :class="book.quantity > 0 ? 'available' : 'unavailable'">{{ book.quantity }}</span></p>
             <!-- Botões de Ação -->
              <div class="book-buttons">
                <button @click="viewBookDetails(book._id)">Ver Detalhes</button>

                <button @click="addToFavorites(book)">Adicionar aos Favoritos</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <FooterElement />
</template>

<script>
// Importando o HeaderElement e FooterElement
import HeaderElement from "@/components/HeaderElement.vue";
import FooterElement from "@/components/FooterElement.vue";

export default {
  name: "HomePage",
  components: {
     HeaderElement, FooterElement
  },
  data() {
    return {
      books: [], // Adicionando o array de livros

    };
  },

  created() {
    this.loadBooksFromStorage(); // Carregar os livros do localStorage ao carregar a página
    this.loadBooksFromAPI(); // Carrega os livros ao criar o componente
  },

  methods: {
    getImageSrc(imagePath) {
    console.log('book.image:', imagePath);  // Verifica o valor de imagePath

    // Substitui barras invertidas por barras normais para garantir compatibilidade
    imagePath = imagePath.replace(/\\/g, '/');

    // Imagem Front
    if (imagePath && imagePath.startsWith('/images')) {
      return `${imagePath}`;  // Imagens vindas do back-end dentro da pasta public/images
    }

    // Se a imagem estiver na pasta "uploads" no back-end, monta a URL com o servidor
    if (imagePath && imagePath.startsWith('uploads')) {
      return `http://localhost:5000/${imagePath}`;  // Imagens vindas do back-end
    }

    // Caso não seja de nenhuma das duas situações acima, retorna o caminho original
    return imagePath; 
  },

  viewBookDetails(bookId) {
    console.log("ID recebido:", bookId); // Verifica o valor do ID recebido
  if (bookId) {
    this.$router.push(`/book/${bookId}`);
  } else {
    console.error('ID do livro não encontrado!');
  }
  
    },

  


    async loadBooksFromAPI() {
    try {
      const response = await fetch('http://localhost:5000/api/books'); // Substitua pela URL correta da sua API
      if (!response.ok) throw new Error("Erro ao carregar livros da API");

      const books = await response.json();
      console.log("Livros carregados:", books); // Verifique se o ID está presente aqui
      this.books = books; // Atualiza os livros no front-end
    } catch (error) {
      console.error("Erro ao carregar livros:", error);
    }
  },

    reserveBook(book) {
      if (book.quantity > 0) {
        book.quantity--; // Reduz a quantidade disponível
        alert(`Você reservou o livro: ${book.title}`);
      } else {
        alert("Este livro não está disponível no momento.");
      }
    },
    returnBook(book) {
      if (book.quantity < book.totalQuantity) {
        book.quantity++; // Aumenta a quantidade disponível
        alert(`Você devolveu o livro: ${book.title}`);
      } else {
        alert("Não há devoluções pendentes para este livro.");
      }
    },

    addBookToCatalog(newBook) {
      newBook.quantity = 1; // Define quantidade inicial como 1 para novos livros
      this.books.push(newBook); // Adiciona o novo livro à lista
      this.saveBooksToStorage(); // Salva no localStorage
    },

    saveBooksToStorage() {
      localStorage.setItem('books', JSON.stringify(this.books)); // Atualiza os dados no localStorage
    },

    loadBooksFromStorage() {
      const books = localStorage.getItem('books');
      if (books) {
        this.books = JSON.parse(books); // Converte os dados do localStorage para o array de objetos
      }
    },
    addToFavorites(book) {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const isAlreadyFavorite = favorites.find((fav) => fav.id === book.id);

      if (isAlreadyFavorite) {
        alert("Este livro já está nos favoritos!");
        return;
      }

      favorites.push(book);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Livro adicionado aos favoritos!");
    },
  },
};
</script>


<style scoped>
/* Estilo do contêiner e botões */
.book-buttons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

/* Estilo dos botões */
.book-buttons button {
  padding: 8px 12px; /* Ajustado padding para aumentar a área clicável */
  border: none;
  background-color: #D32F2F;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex: 1 1 45%; /* Botões ocupam até 45% da largura */
  min-width: 100px;
  box-sizing: border-box;
}

.book-buttons button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.book-buttons button:hover:not(:disabled) {
  background-color: #B71C1C;
}

/* Estilo geral da página de catálogo */
.catalog-page {
  background-color: #f9f9f9;
  box-sizing: border-box;
  padding: 20px;
}

/* Título do catálogo */
.page-title {
  margin-top: 20px;
    text-align: center;
    margin-top: 20px;
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    text-transform: uppercase;
    color: #333;
}

/* Botões de ação */
.catalog-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.action-btn {
  background-color: #d32f2f;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s, transform 0.2s ease;
}

.action-btn:hover {
  background-color: #d32f2f;
    transform: scale(1.05);
}

/* Seção de Catálogo de Livros */
.book-catalog {
  margin-top: 40px;
}

.book-catalog h3 {
  font-size: 24px; /* Aumentado o tamanho do título */
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

/* Layout do catálogo de livros */
.book-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.book-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 16px; /* Ajustado padding para um card mais confortável */
  text-align: center;
  transition: transform 0.3s ease;
  max-width: 180px; /* Diminuído o tamanho do card */
  margin: 0 auto;
}

.book-card:hover {
  transform: scale(1.05);
}

.book-card h4 {
  font-size: 18px; /* Aumentado o tamanho da fonte do título */
  margin-bottom: 12px;
}

.book-card p {
  font-size: 14px;
  margin-bottom: 12px;
}

.book-card button {
  background-color: #D32F2F;
  color: white;
  border: none;
  padding: 8px 16px;
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
  max-height: 200px; /* Limitando a altura da imagem */
  object-fit: cover; /* Mantém a proporção da imagem sem distorcer */
  margin-bottom: 16px;
}

/* Seção sem livros */
.no-books {
  text-align: center;
  font-size: 16px;
  color: #777;
  padding: 20px;
}

/* Saudação ao usuário */
.welcome-message {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  text-align: center;
}

.welcome-message h2 {
  font-size: 24px;
  font-weight: 700;
  color: #D32F2F;
  margin-bottom: 12px;
}

.welcome-message p {
  font-size: 16px;
  color: #555;
}

/* Cards de Status */
.status-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
}

.status-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.status-card h3 {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

.status-number {
  font-size: 40px;
  font-weight: 700;
  color: #D32F2F;
  margin-bottom: 12px;
}

.status-info {
  font-size: 14px;
  color: #777;
}

.status-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Media Queries para telas menores */
@media (max-width: 768px) {
  .book-card {
    width: 90%;
    max-width: 350px;
  }

  .book-list {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 22px;
  }

  .book-card {
    width: 90%;
    max-width: 380px;
  }
}
</style>

