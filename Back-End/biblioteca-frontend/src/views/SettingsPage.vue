<template>

    <!-- Incluindo o HeaderElement -->
  <HeaderElement />

    <div class="settings-page">
      <h2 class="page-title">Configurações</h2>
  
      <!-- Políticas de Empréstimo e Notificações -->
      <div class="section">
        <h3>Políticas de Empréstimo e Notificações</h3>
  
        <div class="loan-policy">
          <p class="policy-text">
            A política de empréstimo visa garantir o uso adequado dos materiais da biblioteca. Os usuários poderão realizar empréstimos de livros por um período máximo de {{ loanPeriod }} dias. 
            Após esse prazo, caso o livro não seja devolvido, será gerada uma notificação para o usuário.
            A biblioteca reserva-se o direito de aplicar multas em caso de atraso ou não devolução dos livros dentro do prazo estipulado. 
            A quantidade de empréstimos permitidos também está sujeita à disponibilidade dos materiais e a regras adicionais que podem ser implementadas conforme a demanda.
          </p>
          <label for="loan-period">Período de Empréstimo (dias):</label>
          <input type="number" id="loan-period" v-model="loanPeriod" min="1" />
        </div>
  
        <div class="notifications">
          <label for="enable-notifications">Notificações:</label>
          <input type="checkbox" id="enable-notifications" v-model="enableNotifications" />
          <span>{{ enableNotifications ? 'Ativado' : 'Desativado' }}</span>
        </div>
      </div>
  
      <!-- Gestão de Permissões de Usuário -->
      <div class="section">
        <h3>Gestão de Permissões de Usuário</h3>
  
        <div class="user-permissions">
          <label for="role-selection">Selecione um Usuário:</label>
          <select id="role-selection" v-model="selectedUser">
            <option value="admin">Administrador</option>
            <option value="librarian">Bibliotecário</option>
          </select>
  
          <button @click="updatePermissions">Atualizar Permissões</button>
        </div>
  
        <div v-if="selectedUser === 'admin'" class="role-description">
          <p>O Administrador tem acesso completo a todas as funções do sistema, incluindo a gestão de usuários e livros.</p>
        </div>
  
        <div v-if="selectedUser === 'librarian'" class="role-description">
          <p>O Bibliotecário tem permissões para gerenciar livros, mas não pode alterar configurações ou usuários.</p>
        </div>
      </div>
  
      <button class="save-btn" @click="saveSettings">Salvar Configurações</button>
    </div>

    <FooterElement />
  </template>
  
  <script>

  // Importando o HeaderElement e FooterElement
import HeaderElement from "@/components/HeaderElement.vue";
import FooterElement from "@/components/FooterElement.vue";


  export default {
    components: {
     HeaderElement, FooterElement
  },
  
    data() {
      return {
        loanPeriod: 14, // Valor inicial do período de empréstimo
        enableNotifications: true, // Notificações ativadas por padrão
        selectedUser: 'admin', // Valor inicial da seleção de usuário
      };
    },
    methods: {
      saveSettings() {
        // Função que salva as configurações
        console.log("Configurações salvas:");
        console.log("Período de Empréstimo:", this.loanPeriod);
        console.log("Notificações:", this.enableNotifications ? "Ativadas" : "Desativadas");
        console.log("Permissões do Usuário:", this.selectedUser);
      },
      updatePermissions() {
        // Função para atualizar as permissões do usuário
        console.log(`Permissões atualizadas para: ${this.selectedUser}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .settings-page {
    background-color: #f9f9f9;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .page-title {
    font-size: 28px;
    color: #D32F2F;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .section {
    margin-bottom: 30px;
  }
  
  h3 {
    font-size: 22px;
    color: #333;
    margin-bottom: 15px;
  }
  
  label {
    font-size: 16px;
    color: #555;
    display: block;
    margin-bottom: 8px;
  }
  
  input[type="number"], input[type="checkbox"], select {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  input[type="checkbox"] {
    width: auto;
    margin-right: 8px;
  }
  
  button {
    background-color: #D32F2F;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #B71C1C;
  }
  
  .save-btn {
    display: block;
    width: 100%;
    padding: 12px 20px;
    background-color: #4caf50;
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
  
  .save-btn:hover {
    background-color: #45a049;
  }
  
  /* Estilo de descrição dos papéis */
  .role-description {
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 4px;
    margin-top: 15px;
    font-size: 14px;
    color: #555;
  }
  
  /* Estilo para a política de empréstimo */
  .policy-text {
    font-size: 16px;
    color: #555;
    margin-bottom: 20px;
  }
  </style>
  