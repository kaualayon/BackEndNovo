<template>

  <!-- Incluindo o HeaderElement -->
  <HeaderElement />
  
    <div class="user-profile">
      
  
      <!-- Título da Página de Perfil -->
      <h2 class="page-title">Meu Perfil</h2>
  
      <!-- Informações do Usuário -->
      <div class="user-info">
        <div class="profile-picture">
          <img src="https://via.placeholder.com/150" alt="Foto do Usuário" />
          <button class="change-picture">Alterar Foto</button>
        </div>
        <div class="user-details">
          <h3>{{ user.name }}</h3>
          <p>Email: {{ user.email }}</p>
          <p>Registro: {{ user.registrationDate }}</p>
        </div>
      </div>
  
      <!-- Histórico de Empréstimos -->
      <div class="loan-history">
        <h3>Histórico de Empréstimos</h3>
        <div v-if="loans.length === 0" class="no-loans">
          <p>Você ainda não tem empréstimos registrados.</p>
        </div>
        <div v-else>
          <ul>
            <li v-for="loan in loans" :key="loan.id">
              <span>{{ loan.bookTitle }}</span> - <span>{{ loan.dueDate }}</span>
              <button @click="viewLoanDetails(loan.id)">Ver Detalhes</button>
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Reservas -->
      <div class="reservations">
        <h3>Reservas Ativas</h3>
        <div v-if="reservations.length === 0" class="no-reservations">
          <p>Você não tem reservas ativas.</p>
        </div>
        <div v-else>
          <ul>
            <li v-for="reservation in reservations" :key="reservation.id">
              <span>{{ reservation.bookTitle }}</span> - <span>{{ reservation.reserveDate }}</span>
              <button @click="viewReservationDetails(reservation.id)">Ver Detalhes</button>
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Botão de Logout -->
      <button @click="logout" class="logout-btn">Sair</button>
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
        user: {
          name: 'João Silva',
          email: 'joao.silva@example.com',
          registrationDate: '01/01/2020',
        },
        loans: [
          { id: 1, bookTitle: 'O Alquimista', dueDate: '15/11/2024' },
          { id: 2, bookTitle: '1984', dueDate: '20/11/2024' },
        ],
        reservations: [
          { id: 1, bookTitle: 'A Moreninha', reserveDate: '10/11/2024' },
        ],
      };
    },
    methods: {
      viewLoanDetails(loanId) {
        console.log(`Visualizando detalhes do empréstimo com ID: ${loanId}`);
        // Implementar a lógica para visualizar detalhes do empréstimo
      },
      viewReservationDetails(reservationId) {
        console.log(`Visualizando detalhes da reserva com ID: ${reservationId}`);
        // Implementar a lógica para visualizar detalhes da reserva
      },
      logout() {
        console.log('Usuário desconectado');
        // Lógica de logout (redirecionar para a página de login)
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style scoped>
 /* Estilo geral da página de perfil */
.user-profile {
  background-color: #f9f9f9;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

/* Título da página */
.page-title {
  font-size: 32px;
  font-weight: bold;
  color: #D32F2F;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
}

/* Seção de Informações do Usuário */
.user-info {
  display: flex;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  margin-bottom: 40px;
  align-items: center;
  box-sizing: border-box;
}

.profile-picture img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.change-picture {
  background-color: #D32F2F;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 14px;
  transition: background-color 0.3s ease;
  text-align: center;
}

.change-picture:hover {
  background-color: #B71C1C;
}

.user-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.user-details h3 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.user-details p {
  font-size: 16px;
  color: #777;
}

/* Seções de Histórico e Reservas */
.loan-history,
.reservations {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  margin-bottom: 40px;
}

.loan-history h3,
.reservations h3 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: left;
}

.loan-history ul,
.reservations ul {
  list-style-type: none;
  padding: 0;
}

.loan-history li,
.reservations li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #555;
}

.loan-history button,
.reservations button {
  background-color: #D32F2F;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.loan-history button:hover,
.reservations button:hover {
  background-color: #B71C1C;
}

/* Mensagem de ausência de dados */
.no-loans,
.no-reservations {
  text-align: center;
  font-size: 16px;
  color: #777;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 5px;
}

/* Botão de Logout */
.logout-btn {
  background-color: #D32F2F;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s;
  margin-top: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
}

.logout-btn:hover {
  background-color: #B71C1C;
  transform: scale(1.05);
}

/* Responsividade */
@media (max-width: 768px) {
  .user-info {
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }

  .profile-picture img {
    width: 120px;
    height: 120px;
  }

  .loan-history,
  .reservations {
    padding: 15px;
  }
}

  </style>
  