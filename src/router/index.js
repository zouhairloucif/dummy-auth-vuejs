import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Charts from '../views/Charts.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Charts
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const user = router.app.$store?.getters["auth/loggedUser"];
  if(!user) {
    if(to.name === 'Login' || to.name === 'Register') {
      next();
    }
    else {
      next({name: 'Login'});
    }
  } else {
    if(to.name === 'Login' || to.name === 'Register') {
      next({name: 'Home'});
    } else {
      next();
    }
  }
})

export default router