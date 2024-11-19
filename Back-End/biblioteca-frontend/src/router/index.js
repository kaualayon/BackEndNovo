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
import UserProfile from '../views/UserProfile.vue';
import NotificationPage from '../views/NotificationPage.vue';
import BookForm from '../views/BookForm.vue';
import AdminUsersPage from '../views/AdminUsersPage.vue';
import BookReservation from '../views/BookReservation.vue';
import ProductBooksAdmin from '../views/ProductBooksAdmin.vue';

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
    meta: { requiresAuth: true },
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
    meta: { requiresAuth: true, requiresAdmin: true },
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

// Navigation Guard para proteger rotas
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); // Verifica se o token está armazenado
  const userRole = localStorage.getItem('role'); // Recupera a função do usuário ('admin' ou 'user')

  if (to.meta.requiresAuth) {
    if (!isAuthenticated) {
      // Usuário não autenticado, redireciona para login
      return next({ name: 'Login' });
    }
    if (to.meta.role && to.meta.role !== userRole) {
      // Usuário autenticado, mas sem permissão
      alert('Você não tem permissão para acessar esta página.');
      return next({ name: 'Home' });
    }
  }

  next(); // Se tudo estiver correto, segue para a rota desejada
});

export default router;
