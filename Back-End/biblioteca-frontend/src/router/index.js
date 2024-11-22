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
import ReportsPage from '../views/ReportsPage.vue';
import AboutPagee from '../views/AboutPagee.vue';
import EditBook from '../views/EditBook.vue';
import RemoveBook from '../views/RemoveBook.vue';

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
 
  
    path: '/editarLivro',
    name: 'EditBook',
    component: EditBook,
  },

  {
 
  
    path: '/removerLivro',
    name: 'RemoveBook',
    component: RemoveBook,
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
    path: '/relatorios',
    name: 'ReportsPage',
    component: ReportsPage, // Define a nova página inicial
  },

  {
    path: '/sobre',
    name: 'AboutPagee',
    component: AboutPagee, // Define a nova página inicial
  },

 
  // Adicione mais rotas conforme necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
