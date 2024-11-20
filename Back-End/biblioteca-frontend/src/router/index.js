import { createRouter, createWebHistory } from 'vue-router';
import RegisterForm from '../views/RegisterForm.vue'; // Certifique-se de que este caminho esteja correto
import HomePage from '../views/HomePage.vue'; // Certifique-se de que este caminho esteja correto
import LoginForm from '../views/LoginForm.vue';
import FirstPage from '../views/FirstPage.vue';
import BookDetail from '../views/BookDetail.vue';
import UserProfile from '../views/UserProfile.vue';
import NotificationPage from '../views/NotificationPage.vue';
import BookForm from '../views/BookForm.vue';
import AdminUsersPage from '../views/AdminUsersPage.vue';
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

 
  // Adicione mais rotas conforme necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
