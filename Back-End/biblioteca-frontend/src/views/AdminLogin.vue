<template>
    <div class="login-form-container">
      <div class="login-header">
        <h2>Admin Login</h2>
        <p>Bem-vindo, administrador! Por favor, insira suas credenciais.</p>
      </div>
  
      <form @submit.prevent="handleAdminLogin" class="login-form">
        <label for="admin-email">E-mail</label>
        <input type="text" id="admin-email" v-model="adminData.email" placeholder="Digite seu e-mail de administrador" required>
  
        <label for="admin-password">Senha</label>
        <input type="password" id="admin-password" v-model="adminData.password" placeholder="Digite sua senha" required>
  
        <input type="submit" value="Entrar">
      </form>
  
      <div class="message">
        <p>Voltar para o <router-link to="/">login de usuário</router-link>.</p>
      </div>
    </div>
</template>
  
<script>
export default {
  name: 'AdminLogin',
  
  data() {
    return {
      adminData: {
        email: '',
        password: ''
      }
    };
  },
  
  methods: {
    handleAdminLogin() {
      if (!this.adminData.email || !this.adminData.password) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
      console.log("Login de admin realizado com sucesso:", this.adminData);
      alert("Login de administrador realizado com sucesso!");
      
      // Redireciona para a página de administração após o login
      this.$router.push('/admin');
    }
  }
};
</script>
  
<style scoped>
/* Estilo CSS do formulário de login do admin */
.login-form-container {
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 40px auto;
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-header h2 {
  margin-bottom: 10px;
  color: #333;
  font-size: 1.8em;
}

.login-header p {
  color: #777;
  font-size: 1.1em;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-form label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
  font-size: 0.9em;
}

.login-form input[type="text"],
.login-form input[type="password"] {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1em;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.login-form input[type="text"]:focus,
.login-form input[type="password"]:focus {
  border-color: #4285f4;
  box-shadow: 0 0 5px rgba(255, 87, 34, 0.3);
  outline: none;
}

.login-form input[type="submit"] {
  background-color: #4285f4;
  color: #fff;
  border: none;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, transform 0.3s;
}

.login-form input[type="submit"]:hover {
  background-color: #4285f4;
  transform: translateY(-2px);
}

.login-form input[type="submit"]:active {
  background-color: #4285f4;
  transform: translateY(0);
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
  color: #4285f4;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.message a:hover {
  color: #4285f4;
  text-decoration: underline;
}
</style>
