import { createRouter, createWebHistory } from 'vue-router';
import RegisterForm from '../views/RegisterForm.vue'; // Certifique-se de que este caminho esteja correto
import HomePage from '../views/HomePage.vue'; // Certifique-se de que este caminho esteja correto
import LoginForm from '../views/LoginForm.vue';
import AboutPage from '../views/AboutPage.vue';
import FirstPage from '../views/FirstPage.vue';
import BookDetail from '../views/BookDetail.vue';
import AdminPage from '../views/AdminPage.vue';
import AdminLogin from '../views/AdminLogin.vue';
import UserProfile from '../views/UserProfile.vue';
import NotificationPage from '../views/NotificationPage.vue';
import BookForm from '../views/BookForm.vue';
import AdminUsersPage from '../views/AdminUsersPage.vue';
import BookReservation from '../views/BookReservation.vue';
import ProductBooksAdmin from '../views/ProductBooksAdmin.vue';
import SettingsPage from '../views/SettingsPage.vue';

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
 
  
    path: '/config',
    name: 'SettingsPage',
    component: SettingsPage,
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
 
  
    path: '/perfil',
    name: 'UserProfile',
    component: UserProfile,
  },

  {
 
  
    path: '/notificacao',
    name: 'NotificationPage',
    component: NotificationPage,
  },

  {
 
  
    path: '/bookForm',
    name: 'BookForm',
    component: BookForm,
  },

  {
 
  
    path: '/adminUsersPage',
    name: 'adminUsersPage',
    component: AdminUsersPage,
  },

  {
 
  
    path: '/bookReservation',
    name: 'bookReservation',
    component: BookReservation,
  },

  {
 
  
    path: '/produtosAdmin',
    name: 'productBooksAdmin',
    component: ProductBooksAdmin,
  },
  // Adicione mais rotas conforme necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
