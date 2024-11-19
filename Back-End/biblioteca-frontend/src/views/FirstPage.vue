<template>
  <div class="first-page">
    <h1>Selecione uma Opção</h1>
    <div class="options">
      <button @click="redirectTo('register')">Entrar na MANGE BOOK</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  methods: {
    redirectTo(role) {
      if (role === 'register') {
        this.$router.push('/register'); // Redireciona para a página de registro
      } else if (role === 'adminlogin') {
        this.$router.push('/adminlogin'); // Redireciona para a página de administração
      }
    }
  }
};
</script>

<style scoped>
.first-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espaçamento entre os botões */
}

.options button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  background-color: #D32F2F; /* Vermelho claro */
  color: white;
}

.options button:hover {
  background-color: #B71C1C; /* Tom mais escuro de vermelho para hover */
}

.options button:focus {
  outline: none;
  border: 2px solid #D32F2F; /* Borda de foco vermelha */
  box-shadow: 0 0 5px rgba(211, 47, 47, 0.3); /* Sombra de foco vermelha */
}
</style>
