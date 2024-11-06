<template>
  <div class="register-form-container">
    <div class="register-header">
      <h2>Registrar</h2>
      <p>Crie sua conta preenchendo os dados abaixo.</p>
    </div>

    <form @submit.prevent="handleRegister" class="register-form">
      <label for="username">Nome de usuário</label>
      <input
        type="text"
        id="username"
        v-model="formData.username"
        placeholder="Digite seu nome de usuário"
        required
      />

      <label for="email">E-mail</label>
      <input
        type="email"
        id="email"
        v-model="formData.email"
        placeholder="Digite seu e-mail"
        required
      />

      <label for="password">Senha</label>
      <input
        type="password"
        id="password"
        v-model="formData.password"
        placeholder="Digite sua senha"
        required
      />

      <input type="submit" :disabled="loading" value="Registrar" />
    </form>

    <div class="message">
      <p>
        Já tem uma conta? <router-link to="/login">Entrar</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterForm',
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: ''
      },
      loading: false // Para controle de loading
    };
  },
  methods: {
    async handleRegister() {
      if (!this.formData.username || !this.formData.email || !this.formData.password) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      console.log("Dados a serem enviados:", this.formData); // Log dos dados
      this.loading = true; // Inicia o loading

      try {
        const response = await axios.post('http://localhost:5000/api/auth/register', this.formData);
        console.log("Resposta do servidor:", response.data); // Log da resposta

        if (response.data.success) {
          alert("Registro realizado com sucesso!");
          this.$router.push('/login'); // Redireciona para a página de login
        } else {
          alert("Falha no registro: " + response.data.message);
        }
      } catch (error) {
        console.error("Erro ao registrar:", error.response ? error.response.data : error);
        alert("Erro ao registrar. Tente novamente mais tarde.");
      } finally {
        this.loading = false; // Finaliza o loading
      }
    }
  }
};
</script>

<style scoped>
.register-form-container {
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 40px auto;
}

.register-header {
  text-align: center;
  margin-bottom: 30px;
}

.register-header h2 {
  margin-bottom: 10px;
  color: #333;
  font-size: 1.8em;
}

.register-header p {
  color: #777;
  font-size: 1.1em;
}

.register-form {
  display: flex;
  flex-direction: column;
}

.register-form label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
  font-size: 0.9em;
}

.register-form input[type="text"],
.register-form input[type="email"],
.register-form input[type="password"] {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1em;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.register-form input[type="text"]:focus,
.register-form input[type="email"]:focus,
.register-form input[type="password"]:focus {
  border-color: #D32F2F; /* Cor do foco vermelha */
  box-shadow: 0 0 5px rgba(211, 47, 47, 0.3); /* Sombra vermelha */
  outline: none;
}

.register-form input[type="submit"] {
  background-color: #D32F2F; /* Vermelho claro */
  color: #fff;
  border: none;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

.register-form input[type="submit"]:hover {
  background-color: #B71C1C; /* Tom mais escuro de vermelho para hover */
  transform: translateY(-2px); /* Efeito de subida */
}

.register-form input[type="submit"]:active {
  transform: translateY(0); /* Efeito de clique */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra leve ao clicar */
}

.register-form input[type="submit"]:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.message {
  margin-top: 20px;
  text-align: center;
}

.message p {
  color: #777;
  font-size: 1em;
}

.message a {
  color: #D32F2F; /* Vermelho */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.message a:hover {
  text-decoration: underline;
}
</style>
