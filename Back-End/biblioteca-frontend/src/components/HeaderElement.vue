<template>
  <header class="header">
    <h1 class="header-title">Mange Book</h1>
    
    <!-- Barra de pesquisa alinhada à direita -->
    <div class="search-bar">
      <input type="text" placeholder="Buscar livros..." />
      <!-- Ícone de lupa preto usando SVG -->
      <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
        <path d="M23 21l-6-6m2-5A9 9 0 1 0 9 18a9 9 0 0 0 9-9z" stroke="black" stroke-width="2" fill="none" />
      </svg>
    </div>
    
    <!-- Ícone de menu para abrir a sidebar -->
    <div class="menu-icon" @click="toggleSidebar">
      ☰
    </div>
    
    <!-- Sidebar com botão de fechar -->
    <div :class="{'sidebar': true, 'open': sidebarOpen}">
      <button class="close-btn" @click="toggleSidebar">X</button>
      <ul>
        <li><router-link to="/home">Dashboard</router-link></li>
        <li><router-link to="/produtos">Catálogo de Livros</router-link></li>
        <li><router-link to="/sobre">Relatórios e Estatísticas</router-link></li>
        <li><router-link to="/contato">Notificações</router-link></li>
        <li><router-link to="/perfil">Conta</router-link></li>
      </ul>
      <!-- Botão de Logout posicionado no canto inferior -->
      <button class="logout-btn" @click="logout">Sair</button>
    </div>
    
    <!-- Sobreposição do fundo quando a sidebar está aberta -->
    <div v-if="sidebarOpen" class="overlay" @click="toggleSidebar"></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: false, // Estado para controlar a visibilidade da sidebar
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen; // Alterna o estado da sidebar
    },
    logout() {
      // Lógica para deslogar o usuário
      console.log("Usuário deslogado");
      // Limpar os dados de login (exemplo com localStorage)
      localStorage.removeItem('user'); // Caso tenha usado o localStorage para armazenar o usuário
      // Redireciona para a página de login
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
/* Header principal */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #D32F2F; /* Tom avermelhado */
  color: white; /* Cor do texto branco */
  border-bottom: 1px solid #ccc;
  position: relative;
  z-index: 10;
}

/* Título do Header */
.header-title {
  font-size: 24px;
  margin: 0;
  text-transform: uppercase; /* Transforma o texto em maiúsculas */
}

/* Barra de pesquisa */
.search-bar {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative; /* Necessário para posicionar o ícone dentro da caixa */
}

.search-bar input {
  padding: 5px 10px 5px 10px; /* Espaço ao redor do texto */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 20px;
  width: 200px; /* Definido o tamanho da caixa de pesquisa */
}

.search-icon {
  position: absolute;
  right: 10px; /* Coloca o ícone à direita do campo de pesquisa */
  top: 50%;
  transform: translateY(-50%); /* Centraliza verticalmente o ícone */
  fill: black; /* Cor preta para o ícone SVG */
  cursor: pointer; /* Cursor de mão para indicar que é clicável */
}

/* Ícone do menu */
.menu-icon {
  font-size: 30px; /* Maior ícone */
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
  border: none;
  color: white; /* Cor do ícone branco para visibilidade */
  z-index: 15; /* Garantir que o ícone fique acima de outros elementos */
  transition: transform 0.2s ease-in-out; /* Transição mais rápida para o ícone */
}

.menu-icon:hover {
  transform: scale(1.1); /* Leve aumento no ícone */
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: -250px; /* Inicialmente escondida à esquerda */
  width: 250px;
  height: 100%;
  background-color: #B71C1C; /* Tom de vermelho mais escuro para combinar com o cabeçalho */
  color: white;
  padding: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: 0; /* Inicialmente invisível */
  transition: left 0.2s ease, opacity 0.2s ease; /* Ajustado para mesma velocidade de 0.2s */
}

/* Quando a sidebar está aberta */
.sidebar.open {
  left: 0; /* A sidebar desliza para a direita */
  opacity: 1; /* A sidebar fica visível */
}

/* Lista de links na sidebar */
.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin: 20px 0;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

/* Botão de fechar (X) na sidebar */
.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px; /* Tamanho reduzido do X */
  cursor: pointer;
  position: absolute; /* Posicionamento absoluto */
  top: 10px;
  right: 10px; /* Canto superior direito */
}

/* Estilo para os links da sidebar */
.sidebar a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px 0;
  transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  border-radius: 5px; /* Bordas arredondadas */
}

/* Alteração de cor quando o mouse passa por cima do item */
.sidebar a:hover {
  background-color: #FF6F6F; /* Tom de vermelho mais claro para hover */
  transform: scale(1.05); /* Efeito de aumento suave no item */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Sombra sutil ao passar o mouse */
}

/* Overlay de fundo */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Fundo escuro semi-transparente */
  z-index: 999; /* Coloca a sobreposição atrás da sidebar */
  display: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out; /* Transição de opacidade mais rápida */
}

.overlay.active {
  display: block;
  opacity: 1; /* Mostra o fundo quando a sidebar está aberta */
}

/* Estilo para o botão de logout */
.logout-btn {
  background-color: #FF6F6F; /* Cor de fundo do botão */
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-top: auto; /* Isso garante que o botão fique na parte inferior */
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: absolute;
  bottom: 20px; /* Ajusta a posição para o fundo */
  left: 50%;
  transform: translateX(-50%); /* Centraliza o botão horizontalmente */
}

.logout-btn:hover {
  background-color: #D32F2F; /* Cor mais forte de vermelho ao passar o mouse */
}
</style>
