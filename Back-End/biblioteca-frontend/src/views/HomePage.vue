<template>
  <div class="home-page">
    <!-- Incluindo o HeaderElement -->
    <HeaderElement />

    <!-- Título da HomePage -->
    <h2 class="page-title">Dashboard</h2>

    <!-- Status de Empréstimos, Devoluções e Reservas -->
    <div class="status-cards">
      <!-- Empréstimos -->
      <div class="status-card">
        <h3>Empréstimos Ativos</h3>
        <p class="status-number">3</p>
        <p class="status-info">Livros emprestados atualmente</p>
      </div>

      <!-- Devoluções -->
      <div class="status-card">
        <h3>Devoluções Pendentes</h3>
        <p class="status-number">1</p>
        <p class="status-info">Livros aguardando devolução</p>
      </div>

      <!-- Reservas -->
      <div class="status-card">
        <h3>Reservas</h3>
        <p class="status-number">2</p>
        <p class="status-info">Livros reservados</p>
      </div>
    </div>

  </div>
</template>

<script>
// Importando o HeaderElement
import HeaderElement from "@/components/HeaderElement.vue";

export default {
  components: {
    HeaderElement,
  },
  data() {
    return {};
  },
  methods: {},
}
</script>

<style scoped>
/* Estilo geral da HomePage */
.home-page {
  background-color: #f9f9f9;
  box-sizing: border-box;
}

/* Título da página */
.page-title {
  font-size: 28px;
  font-weight: bold;
  color: #D32F2F;
  margin-bottom: 20px;
  text-align: center;
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
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  text-align: center;
  transition: transform 0.2s ease;
}

.status-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.status-number {
  font-size: 36px;
  font-weight: bold;
  color: #D32F2F;
}

.status-info {
  font-size: 14px;
  color: #666;
}

/* Efeito de transformação suave ao passar o mouse */
.status-card:hover {
  transform: scale(1.05);
}

/* Media Queries para telas menores (responsividade) */
@media (max-width: 768px) {
  .status-card {
    width: 100%;
    max-width: 350px;
  }

  .status-cards {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 24px;
  }

  .status-card {
    width: 90%;
    max-width: 400px;
  }
}
</style>
