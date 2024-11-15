<template>
  <div class="home-page">
    <HeaderElement />

    <!-- Saudação ao usuário -->
    <div class="welcome-message">
      <h2>Bem-vindo, {{ userName }}!</h2>
      <p>Estamos felizes em tê-lo de volta. Explore nossos recursos abaixo.</p>
    </div>

    <!-- Título da HomePage -->
    <h2 class="page-title">Dashboard</h2>

    <!-- Status de Empréstimos, Devoluções e Reservas -->
    <div class="status-cards">
      <div class="status-card">
        <h3>Empréstimos Ativos</h3>
        <p class="status-number">3</p>
        <p class="status-info">Livros emprestados atualmente</p>
      </div>

      <div class="status-card">
        <h3>Devoluções Pendentes</h3>
        <p class="status-number">1</p>
        <p class="status-info">Livros aguardando devolução</p>
      </div>

      <div class="status-card">
        <h3>Reservas</h3>
        <p class="status-number">2</p>
        <p class="status-info">Livros reservados</p>
      </div>
    </div>

    <!-- Últimas Notícias -->
    <div class="news-section">
      <h3>Últimas Notícias</h3>
      <ul class="news-list">
        <li class="news-item">Catálogo de livros atualizado com novos títulos.</li>
        <li class="news-item">Evento de leitura de fim de semana, participe!</li>
        <li class="news-item">Novos livros de ficção científica chegaram à biblioteca.</li>
      </ul>
    </div>

    <!-- Atividade Recente -->
    <div class="recent-activity">
      <h3>Atividade Recente</h3>
      <ul class="recent-activity-list">
        <li class="activity-item">Você reservou "A Arte da Programação".</li>
        <li class="activity-item">Devolveu "Moby Dick".</li>
        <li class="activity-item">Fez uma reserva para "1984".</li>
      </ul>
    </div>

    <!-- Destaque de Livro -->
    <div class="book-highlight">
      <h3>Destaque do Livro</h3>
      
      <!-- Card do Livro com Imagem Clicável -->
      <div class="book-card">
        <router-link to='/book/8'>
          <img src="/images/o_senhor_dos_aneis.jpg" alt="Destaque do Livro" />
        </router-link>
        <div>
          <h4>"O Senhor dos Anéis"</h4>
          <p>Uma aventura épica na Terra Média. Não perca essa leitura!</p>
        </div>
      </div>
    </div>

    <!-- Botões para Explorar Catálogo e Reservar Livro -->
    <div class="action-buttons">
      <button @click="exploreCatalog">Explorar Catálogo de Livros</button>
      <button @click="reserveBook">Reservar Livro</button>
    </div>
    
    <FooterElement />
  </div>
</template>

<script>
import HeaderElement from "@/components/HeaderElement.vue";
import FooterElement from "@/components/FooterElement.vue";
import axios from 'axios';

export default {
  components: {
    HeaderElement, FooterElement
  },
  data() {
    return {
      userName: '', // Armazena o nome do usuário obtido da API
    
  };
  },

  created() {
    this.fetchUserName();
  },

  methods: {

    async fetchUserName() {
      try {
        const response = await axios.get('http://localhost:5000/api/user'); // URL da API de usuário
        this.userName = response.data.username; // Ajuste com base na estrutura da resposta da sua API
      } catch (error) {
        console.error('Erro ao buscar o nome do usuário:', error);
      }
    },
    
    exploreCatalog() {
      this.$router.push("/produtos");
    },
    reserveBook() {
      this.$router.push("/bookReservation");
    }
  }
}
</script>

<style scoped>
/* Estilo geral da HomePage */
.home-page {
  background-color: #f4f6f8;
  box-sizing: border-box;
  color: #333;
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
  font-size: 26px;
  font-weight: 700;
  color: #D32F2F;
  margin-bottom: 10px;
}

.welcome-message p {
  font-size: 16px;
  color: #555;
}

/* Título da página */
.page-title {
  font-size: 30px;
  font-weight: 700;
  color: #D32F2F;
  margin-bottom: 30px;
  text-align: center;
}

/* Cards de Status */
.status-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-bottom: 40px;
}

.status-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 25px;
  width: 280px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.status-card h3 {
  font-size: 22px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.status-number {
  font-size: 40px;
  font-weight: 700;
  color: #D32F2F;
  margin-bottom: 10px;
}

.status-info {
  font-size: 16px;
  color: #777;
}

.status-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Seção de Últimas Notícias */
.news-section {
  margin-bottom: 40px;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.news-section h3 {
  font-size: 22px;
  color: #D32F2F;
  margin-bottom: 15px;
}

.news-section ul {
  list-style: none;
  padding: 0;
  opacity: 0;
  animation: fadeIn 1.5s forwards;
}

.news-section li {
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
  line-height: 1.6;
  transition: transform 0.3s ease;
}

.news-section li:hover {
  transform: translateX(10px);
}

/* Seção de Atividade Recente */
.recent-activity {
  margin-bottom: 40px;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.recent-activity h3 {
  font-size: 22px;
  color: #D32F2F;
  margin-bottom: 15px;
}

.recent-activity ul {
  list-style: none;
  padding: 0;
  opacity: 0;
  animation: fadeIn 1.5s forwards;
}

.recent-activity li {
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
  line-height: 1.6;
  transition: transform 0.3s ease;
}

.recent-activity li:hover {
  transform: translateX(10px);
}

/* Destaque de Livro */
.book-highlight {
  margin-bottom: 40px;
  text-align: center;
}

.book-highlight h3 {
  font-size: 22px;
  color: #D32F2F;
  margin-bottom: 15px;
}

.book-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.book-card img {
  width: 140px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.book-card div {
  max-width: 300px;
  text-align: left;
}

.book-card h4 {
  font-size: 20px;
  font-weight: 700;
  color: #D32F2F;
}

.book-card p {
  font-size: 16px;
  color: #555;
}

/* Botões de Ação */
.action-buttons {
  text-align: center;
  margin-top: 50px;
}

.action-buttons button {
  background-color: #D32F2F;
  color: white;
  border: none;
  padding: 12px 30px;
  margin: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.action-buttons button:hover {
  background-color: #B71C1C;
}

/* Animação de fade-in */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
