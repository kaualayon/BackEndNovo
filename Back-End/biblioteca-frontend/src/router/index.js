import { createRouter, createWebHistory } from 'vue-router';
import RegisterForm from '../views/RegisterForm.vue'; // Certifique-se de que este caminho esteja correto
import HomePage from '../views/HomePage.vue'; // Certifique-se de que este caminho esteja correto
import ProductBooks from '../views/ProductBooks.vue';
import LoginForm from '../views/LoginForm.vue';
import AboutPage from '../views/AboutPage.vue';
import FirstPage from '../views/FirstPage.vue';
import BookDetail from '../views/BookDetail.vue';
import AdminPage from '../views/AdminPage.vue';
import AdminLogin from '../views/AdminLogin.vue';
import CartPage from '../views/CartPage.vue';

const routes = [
  {
    path: '/',
    name: 'FirstPage',
    component: FirstPage, // Define a nova página inicial
  },

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

  {
 
  
    path: '/sobre',
    name: 'AboutPage',
    component: AboutPage,
  },

  {
 
  
    path: '/book/:id',
    name: 'BookDetail',
    component: BookDetail,
  },

  {
 
  
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage,
  },

  {
 
  
    path: '/adminlogin',
    name: 'AdminLogin',
    component: AdminLogin,
  },

  {
 
  
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
  },
  // Adicione mais rotas conforme necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
