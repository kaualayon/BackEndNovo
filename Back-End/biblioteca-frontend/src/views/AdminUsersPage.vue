<template>
    <div class="admin-users-page">
      <h2>Gerenciamento de Usuários</h2>
      <div v-if="users.length === 0" class="no-users">
        <p>Não há usuários registrados.</p>
      </div>
      <div v-else class="user-list">
        <div class="user-card" v-for="user in users" :key="user.id">
          <p><strong>Nome de Usuário:</strong> {{ user.username }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <button @click="editUser(user)">Editar</button>
          <button @click="deleteUser(user.id)">Excluir</button>
        </div>
      </div>
    </div>
    
  </template>
  
  <script>

  import axios from 'axios';
  
  export default {

    components: {
      
    },
    data() {
      return {
        users: [], // Stores all users
      };
    },
    created() {
      this.fetchUsers(); // Load users when the component is created
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get('http://localhost:5000/api/users'); // Fetch users from backend
          this.users = response.data;
        } catch (error) {
          console.error("Erro ao carregar usuários:", error);
          alert("Erro ao carregar a lista de usuários.");
        }
      },
      editUser(user) {
        const updatedEmail = prompt("Digite o novo email:", user.email);
        if (updatedEmail) {
          this.updateUser(user.id, updatedEmail);
        }
      },
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
  .admin-users-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 150px;
    background-color: #f9f9f9;
  }
  
  h2 {
    text-align: center;
    color: #D32F2F;
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
  </style>
  