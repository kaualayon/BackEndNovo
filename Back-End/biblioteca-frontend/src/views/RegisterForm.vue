<template>
  <div class="register-form-container">
    <div class="register-header">
      <h2>Registrar</h2>
      <p>Crie sua conta preenchendo os dados abaixo.</p>
    </div>

    <form @submit.prevent="handleRegister" class="register-form">
      <label for="username">Nome de usuário</label>
      <input type="text" id="username" v-model="formData.username" placeholder="Digite seu nome de usuário" required>

      <label for="email">E-mail</label>
      <input type="email" id="email" v-model="formData.email" placeholder="Digite seu e-mail" required>

      <label for="password">Senha</label>
      <input type="password" id="password" v-model="formData.password" placeholder="Digite sua senha" required>

      <input type="submit" value="Registrar">
    </form>

    <div class="message">
      <p>Já tem uma conta? <router-link to="/login">Entrar</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',

  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: ''
      }
    };
  },

  methods: {
    handleRegister() {
      if (!this.formData.username || !this.formData.email || !this.formData.password) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
      console.log("Registro realizado com sucesso:", this.formData);
      alert("Registro realizado com sucesso!");

      // Aqui você pode adicionar a lógica para salvar o usuário

      // Redirecionar para a HomePage após o registro
      this.$router.push('/home'); // Redireciona para a página inicial
    }
  }
};
</script>

<style scoped>
/* (Estilos permanecem os mesmos) */
.register-form-container {
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px; /* Tamanho máximo do container */
  margin: 40px auto; /* Espaço de 40px acima e abaixo, e centraliza o formulário horizontalmente */
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

/* Estilo para o formulário de registro */
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
  border-color: #4285f4;
  box-shadow: 0 0 5px rgba(255, 87, 34, 0.3);
  outline: none;
}

.register-form input[type="submit"] {
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

.register-form input[type="submit"]:hover {
  background-color: #4285f4;
  transform: translateY(-2px);
}

.register-form input[type="submit"]:active {
  background-color: #4285f4;
  transform: translateY(0);
}

/* Estilo para a mensagem de registro */
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
