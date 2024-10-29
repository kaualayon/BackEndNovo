import { createRouter, createWebHistory } from 'vue-router';
import RegisterForm from './views/RegisterForm.vue'; // Verifique se o caminho está correto

const routes = [
  
  {
    path: '/register',  // Certifique-se de que a rota está correta
    name: 'Register',
    component: RegisterForm
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
