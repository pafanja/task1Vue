import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import auth from './auth'
import News from './views/News.vue'
import Login from './views/Login.vue'
import Profile from './views/Profile.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
      {
          path: '/profile',
          name: 'profile',
          component: Profile,
          beforeEnter : requireAuth
      },
      {
          path: '/login',
          name: 'login',
          component: Login
      }
  ]
})
function requireAuth (to, from, next) {
    if (!auth.loggenIn()) {
        next({
            path: '/login',
            query: {redirect: to.fullPath}
        })
    } else {
        next()
    }
}