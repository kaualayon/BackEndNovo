import { createRouter, createWebHistory } from 'vue-router';
import RegisterForm from '../views/RegisterForm.vue'; // Certifique-se de que este caminho esteja correto
import HomePage from '../views/HomePage.vue'; // Certifique-se de que este caminho esteja correto
import ProductBooks from '../views/ProductBooks.vue';
import LoginForm from '../views/LoginForm.vue';

const routes = [
  {
 
  
    path: '/register',
    name: 'RegisterForm',
    component: RegisterForm,
  },
  {
 
  
    path: '/home',
    name: 'HomePage',
    component: HomePage,
  },

  {
 
  
    path: '/produtos',
    name: 'ProductBooks',
    component: ProductBooks,
  },
  {
 
  
    path: '/login',
    name: 'LoginForm',
    component: LoginForm,
  },
  // Adicione mais rotas conforme necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
