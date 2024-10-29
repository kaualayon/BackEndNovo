import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue'; // Verifique se o caminho está correto
import RegisterForm from './components/RegisterForm.vue'; // Verifique se o caminho está correto

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/register',
    name: 'RegisterForm',
    component: RegisterForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
