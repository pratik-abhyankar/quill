import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login-page',
      component: require('@/components/Authentication/Login').default
    },
    {
      path: '/signup',
      name: 'singup-page',
      component: require('@/components/Authentication/SignUp').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
