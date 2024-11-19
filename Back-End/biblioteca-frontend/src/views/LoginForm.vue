<template>
  <div class="auth-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="text" v-model="form.username" placeholder="Nome de usuário" required />
      <input type="password" v-model="form.password" placeholder="Senha" required />
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form),
        });
        const data = await response.json();
        if (response.ok) {
          // Armazena os dados do usuário e o redireciona com base no papel
          localStorage.setItem('user', JSON.stringify(data));
          if (data.role === 'admin') {
            this.$router.push('/admin');
          } else {
            this.$router.push('/home');
          }
        } else {
          alert(data.message || 'Credenciais inválidas.');
        }
      } catch (err) {
        alert('Erro ao se conectar com o servidor.');
      }
    },
  },
};
</script>

<style scoped>
/* Container do formulário */
.auth-container {
  background: linear-gradient(135deg, #f9f9f9, #eaeff4); /* Gradiente claro */
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); /* Sombra suave */
  width: 100%;
  max-width: 420px;
  margin: 50px auto;
  font-family: 'Arial', sans-serif;
  text-align: center;
}

/* Cabeçalho */
.auth-container h1 {
  font-size: 1.8em;
  color: #333; /* Cinza escuro */
  margin-bottom: 20px;
  font-weight: bold;
}

/* Formulário */
form {
  display: flex;
  flex-direction: column;
}

form input,
form select {
  width: 100%;
  padding: 14px 18px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1em;
  transition: border-color 0.3s, box-shadow 0.3s;
  background: #fff;
}

/* Efeitos de foco */
form input:focus,
form select:focus {
  border-color: #D32F2F; /* Vermelho */
  box-shadow: 0 0 8px rgba(211, 47, 47, 0.3); /* Sombra vermelha */
  outline: none;
}

/* Botão de registro */
form button {
  background-color: #D32F2F; /* Vermelho */
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

form button:hover {
  background-color: #B71C1C; /* Vermelho mais escuro */
  transform: translateY(-2px); /* Efeito de elevação */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra ao passar o mouse */
}

form button:active {
  transform: translateY(0); /* Reset ao clicar */
  box-shadow: none;
}

form button:disabled {
  background-color: #bdc3c7; /* Cinza para estado desativado */
  cursor: not-allowed;
}

/* Mensagem de erro ou sucesso */
.error-message {
  color: #e74c3c; /* Vermelho */
  margin-bottom: 20px;
  font-size: 0.9em;
}

.success-message {
  color: #2ecc71; /* Verde */
  margin-bottom: 20px;
  font-size: 0.9em;
}

/* Responsividade */
@media (max-width: 768px) {
  .auth-container {
    padding: 30px;
  }
}
</style>