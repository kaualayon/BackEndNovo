import { createRouter, createWebHistory } from 'vue-router';
import RegisterForm from '../views/RegisterForm.vue'; // Certifique-se de que este caminho esteja correto

const routes = [
  {
 
  
    path: '/register',
    name: 'RegisterForm',
    component: RegisterForm,
  },
  // Adicione mais rotas conforme necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
