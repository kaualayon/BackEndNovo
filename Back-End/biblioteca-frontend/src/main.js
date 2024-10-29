import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Certifique-se de que este caminho está correto
import './assets/css/style.css'; // Importando CSS global



const app = createApp(App);
app.use(router); // Adicionando o router ao aplicativo
app.mount('#app');
