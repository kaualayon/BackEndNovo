<template>
    <div class="notifications-page">
      <!-- Componente de Header com o logo e outras funcionalidades -->
      <HeaderElement />
  
      <!-- Seção de Título -->
      <section class="notifications-title">
        <h2>Notificações</h2>
      </section>
  
      <!-- Lista de Notificações -->
      <div class="notifications-list">
        <ul>
          <li v-if="notifications.length === 0" class="no-notifications">Nenhuma notificação.</li>
          <li v-for="(notification, index) in notifications" :key="index" class="notification-item">
            <span>{{ notification }}</span>
            <button @click="removeNotification(index)" class="remove-notification-btn">Excluir</button>
          </li>
        </ul>
      </div>
  
      <!-- Botão para limpar todas as notificações -->
      <div v-if="notifications.length > 0" class="clear-btn-container">
        <button @click="clearNotifications" class="clear-notifications-btn">Limpar Todas as Notificações</button>
      </div>
    </div>
  </template>
  
  <script>
  // Importe seu HeaderElement, garantindo que seja o mesmo que o do seu projeto
  import HeaderElement from '@/components/HeaderElement.vue';
  
  export default {
    components: {
      HeaderElement,
    },
    data() {
      return {
        notifications: [
          "Livro reservado com sucesso!",
          "Adicionado à lista de desejos.",
          "Novo catálogo de livros disponível.",
          "Seu empréstimo foi renovado com sucesso.",
        ],
      };
    },
    methods: {
      clearNotifications() {
        this.notifications = [];
      },
      removeNotification(index) {
        this.notifications.splice(index, 1); // Remove a notificação pelo índice
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilo geral da página de notificações */
  .notifications-page {
    font-family: 'Arial', sans-serif;
    
    background-color: #f7f7f7;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Título da seção de notificações */
  .notifications-title {
    margin-top: 20px;
    text-align: center;
  }
  
  .notifications-title h2 {
    font-size: 28px;
    font-weight: 600;
    text-transform: uppercase;
    color: #333;
    margin: 0;
  }
  
  /* Lista de notificações */
  .notifications-list {
    margin-top: 30px;
    width: 100%;
    max-width: 600px;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  /* Separação entre notificações */
  .notifications-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .notification-item {
    font-size: 16px;
    color: #333;
    padding: 15px;
    margin-bottom: 20px; /* Maior espaçamento entre as notificações */
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f9f9f9;
    border-radius: 8px;
    transition: background-color 0.3s, transform 0.2s ease-in-out;
  }
  
  .notification-item:hover {
    background-color: #fff2f2;
    transform: translateY(-3px);
  }
  
  .remove-notification-btn {
    background-color: #FF6F6F;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
  }
  
  .remove-notification-btn:hover {
    background-color: #d32f2f;
  }
  
  /* Botão de limpar todas as notificações */
  .clear-btn-container {
    margin-top: 30px;
    text-align: center;
  }
  
  .clear-notifications-btn {
    background-color: #FF6F6F;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s, transform 0.2s ease;
  }
  
  .clear-notifications-btn:hover {
    background-color: #d32f2f;
    transform: scale(1.05);
  }
  
  /* Estilo para quando não há notificações */
  .no-notifications {
    color: #888;
    font-size: 16px;
    text-align: center;
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    .notifications-title h2 {
      font-size: 24px;
    }
  
    .clear-notifications-btn {
      width: 100%;
      font-size: 14px;
    }
  
    .notifications-list {
      padding: 20px;
    }
  
    .remove-notification-btn {
      padding: 5px 10px;
      font-size: 12px;
    }
  }
  </style>
  