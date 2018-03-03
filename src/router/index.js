import Vue from 'vue'
import Router from 'vue-router'
/*import Login from '@/pages/login/Main'*/
import Login from '@/pages/login1/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
