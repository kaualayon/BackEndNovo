<template>
<HeaderAdmin />

  <div class="admin-page">
    

      <!-- Dashboard Content -->
      <div class="content">
        <section class="dashboard">
          <h2 class="dashboard-title">Dashboard</h2>

          <!-- Div para agrupar os cards e alinhar à esquerda -->
          <div class="dashboard-cards-container">
            <div class="dashboard-card">
              <h3>{{ booksCount }}</h3>
              <p>Total de Livros</p>
            </div>
            <div class="dashboard-card middle-card">
              <h3>{{ usersCount }}</h3>
              <p>Total de Usuários</p>
            </div>
            <div class="dashboard-card">
              <h3>{{ loansCount }}</h3>
              <p>Total de Empréstimos</p>
            </div>

             <!-- Novo Card de Devoluções -->
          <div class="dashboard-card">
            <h3>{{ returnsCount }}</h3>
            <p>Total de Devoluções</p>
          </div>

          <!-- Novo Card de Multas -->
          <div class="dashboard-card">
            <h3>{{ finesCount }}</h3>
            <p>Total de Multas</p>
          </div>

          </div>
           <!-- Gráficos de círculo -->
        <div class="charts-container">
          <CircleChart :data="booksChartData" title="Distribuição de Gêneros Literários" />
          <CircleChart :data="usersChartData" title="Distribuição por Tipo de Usuário" />
          <CircleChart :data="loansChartData" title="Empréstimos por Mês" />
          <CircleChart :data="finesChartData" title="Distribuição de Multas" />
        </div>
        </section>
      </div>
    </div>
    <FooterAdmin />
</template>

<script>
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import FooterAdmin from "@/components/FooterAdmin.vue";
import CircleChart from "@/components/CircleChart.vue";

export default {
  components: {
    HeaderAdmin, FooterAdmin, CircleChart
  },

  data() {
    return {
      sidebarOpen: false,
      booksCount: 100,
      usersCount: 50,
      loansCount: 30,
      returnsCount: 20,
      finesCount: 15,
      
      // Dados para os gráficos
      booksChartData: {
        labels: ['Ficção', 'Não-ficção', 'Romance', 'Ciência'],
        datasets: [{ data: [40, 25, 20, 15], backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'] }]
      },
      usersChartData: {
        labels: ['Estudantes', 'Professores', 'Visitantes'],
        datasets: [{ data: [60, 30, 10], backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'] }]
      },
      loansChartData: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
        datasets: [{ data: [10, 20, 15, 25], backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'] }]
      },
      finesChartData: {
        labels: ['Atrasos', 'Danificados', 'Perdidos'],
        datasets: [{ data: [10, 3, 2], backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'] }]
      },
    };
    
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>

<style scoped>
/* Resetando margens e padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Layout da página de admin */
.admin-page {
  font-family: Arial, sans-serif;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Centraliza o container principal */
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* Estilo do header */
.header {
  background-color: #D32F2F;
  color: white;
  padding: 15px 20px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between; /* Distribui os itens */
  align-items: center; /* Alinha os itens verticalmente */
}

/* Título do header */
.header-title {
  font-size: 24px;
  margin: 0;
  text-transform: uppercase;
}

/* Ícone do menu */
.menu-icon {
  font-size: 30px;
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
  border: none;
  color: white; /* Cor branca */
  transition: transform 0.3s ease-in-out;
}

.menu-icon:hover {
  transform: scale(1.2); /* Aumenta um pouco o ícone ao passar o mouse */
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: -250px; /* Inicialmente escondida à esquerda */
  width: 250px;
  height: 100%;
  background-color: #B71C1C; /* Tom de vermelho mais escuro para combinar com o cabeçalho */
  color: white;
  padding: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: left 0.3s ease-in-out;
}

.sidebar.open {
  left: 0; /* A sidebar desliza para a direita */
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin: 20px 0;
  font-size: 18px;
}

.sidebar a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px;
  transition: background-color 0.2s ease;
  border-radius: 5px;
}

.sidebar a:hover {
  background-color: #FF6F6F;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

/* Overlay de fundo */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.overlay.active {
  display: block;
  opacity: 1;
}

/* Estilo do conteúdo */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 80px;
  text-align: center;
  padding: 20px;
}

.dashboard {
  width: 100%;
  max-width: 1000px; /* Define um tamanho máximo para o conteúdo */
  text-align: left; /* Alinha o texto à esquerda */
}

.dashboard h2 {
  font-size: 28px;
  margin-bottom: 20px;
  position: relative;
  left: 50%; /* Centraliza horizontalmente */
  transform: translateX(-50%); /* Ajusta o posicionamento para que o título esteja sobre o card do meio */
}

/* Agrupando os cards */
.dashboard-cards-container {
  display: flex;
  justify-content: center; 
  gap: 20px; /* Espaçamento entre os cards */
  flex-wrap: wrap; /* Permite que os cards se movam para a linha seguinte se necessário */
  max-width: 1000px; /* Define um tamanho máximo para a área dos cards */
  margin-left: auto;
  margin-right: auto;
  align-items: center; /* Alinha os itens verticalmente */
  margin-top: 20px;
}

/* Estilo dos cards */
.dashboard-card {
  background-color: #FFEBEE;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 250px; /* Limita o tamanho máximo do card */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Estilo especial para o card do meio */
.middle-card {
  position: relative;
  z-index: 1; /* Faz com que o card do meio fique mais proeminente */
}

.dashboard-card h3 {
  font-size: 32px;
  margin: 0;
}

.dashboard-card p {
  font-size: 16px;
  margin-top: 10px;
}

/* Estilos para a seção de gráficos */
.chart-section {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
}

.dashboard-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  margin-top: 20px;
}

.dashboard-card {
  background-color: #FFEBEE;
  padding: 20px;
  border-radius: 8px;
  max-width: 200px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.charts-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
}

.chart-title {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
