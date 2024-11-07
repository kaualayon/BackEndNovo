<template>
    <div class="user-profile">
      <!-- Incluindo o HeaderElement -->
      <HeaderElement />
  
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

  .reservations{
    padding: 20px;
  }
  
  .loan-history{
    padding: 20px;
  }
  
  /* Seção de Informações do Usuário */
  .user-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .profile-picture img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .change-picture {
    background-color: #D32F2F;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s ease;
  }
  
  .change-picture:hover {
    background-color: #B71C1C;
  }
  
  .user-details h3 {
    font-size: 22px;
    font-weight: bold;
    color: #333;
  }
  
  .user-details p {
    font-size: 16px;
    color: #777;
  }
  
  /* Seção de Histórico de Empréstimos */
  .loan-history,
  .reservations {
    margin-bottom: 40px;
  }
  
  .loan-history h3,
  .reservations h3 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  
  .loan-history ul,
  .reservations ul {
    list-style-type: none;
    padding: 0;
  }
  
  .loan-history li,
  .reservations li {
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .loan-history button,
  .reservations button {
    background-color: #D32F2F;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .loan-history button:hover,
  .reservations button:hover {
    background-color: #B71C1C;
  }
  
  /* Seção sem dados */
  .no-loans,
  .no-reservations {
    text-align: center;
    font-size: 16px;
    color: #777;
  }
  
  /* Botão de Logout */
  .logout-btn {
    background-color: #D32F2F;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    transition: background-color 0.3s ease;
  }
  
  .logout-btn:hover {
    background-color: #B71C1C;
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    .user-info {
      flex-direction: column;
      align-items: center;
    }
  
    .profile-picture img {
      width: 120px;
      height: 120px;
    }
  }
  </style>
  