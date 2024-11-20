<template>
  <HeaderElement />
  
  <!-- Div de fundo escuro -->
  <div class="background-overlay">
    <!-- Div do conteúdo centralizado -->
    <div class="admin-users-page">
      <h2>Gerenciamento de Usuários</h2>
    
      <!-- Exibição de mensagem quando não há usuários -->
      <div v-if="users.length === 0" class="no-users">
        <p>Não há usuários registrados.</p>
      </div>

      <!-- Exibição da lista de usuários -->
      <div v-else class="user-list">
        <div class="user-card" v-for="user in users" :key="user.id">
          <p><strong>Nome de Usuário:</strong> {{ user.username }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <button @click="editUser(user)">Editar</button>
          <button @click="deleteUser(user.id)">Excluir</button>
        </div>
      </div>
    </div>
  </div>

  <FooterElement />
</template>

<script>
import axios from 'axios';
import HeaderElement from "@/components/HeaderElement.vue";
import FooterElement from "@/components/FooterElement.vue";

export default {
  components: {
    HeaderElement, FooterElement
  },
  data() {
    return {
      users: [] // Armazena todos os usuários
    };
  },
  created() {
    this.fetchUsers(); // Carregar usuários quando o componente for criado
  },
  methods: {
    // Método para buscar os usuários
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        this.users = response.data;
      } catch (error) {
        console.error("Erro ao carregar usuários:", error);
        alert("Erro ao carregar a lista de usuários.");
      }
    },
    // Método para editar um usuário
    editUser(user) {
      const updatedEmail = prompt("Digite o novo email:", user.email);
      if (updatedEmail) {
        this.updateUser(user.id, updatedEmail);
      }
    },
    // Método para atualizar um usuário
    async updateUser(userId, newEmail) {
      try {
        await axios.put(`http://localhost:5000/api/users/${userId}`, {
          email: newEmail
        });
        this.fetchUsers();
        alert("Usuário atualizado com sucesso!");
      } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        alert("Erro ao atualizar o usuário.");
      }
    },
    // Método para excluir um usuário
    async deleteUser(userId) {
      if (confirm("Tem certeza de que deseja excluir este usuário?")) {
        try {
          await axios.delete(`http://localhost:5000/api/users/${userId}`);
          this.fetchUsers();
          alert("Usuário excluído com sucesso!");
        } catch (error) {
          console.error("Erro ao excluir usuário:", error);
          alert("Erro ao excluir o usuário.");
        }
      }
    }
  }
};
</script>

<style scoped>
/* Div de fundo escuro */
.background-overlay {
  background-color: #f7f7f7;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Div do conteúdo centralizado */
.admin-users-page {
  max-width: 400px;
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 28px;
  font-weight: 600;
  text-transform: uppercase;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.user-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.user-card {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.user-card p {
  margin: 5px 0;
}

button {
  margin-right: 10px;
  padding: 8px 12px;
  background-color: #D32F2F;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #B71C1C;
}

/* Responsividade */
@media (max-width: 768px) {
  .admin-users-page {
    width: 90%;
    padding: 15px;
  }
}
</style>
