import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'authentication',
      component: require('@/components/Authentication/Authentication').default,
      children: [
        {
          path: '/',
          redirect: 'login-page'
        },
        {
          path: '/login-page',
          name: 'login-page',
          component: require('@/components/Authentication/Login').default
        },
        {
          path: '/create-profile',
          name: 'create-profile-page',
          component: require('@/components/Authentication/CreateProfile').default
        },
        {
          path: '/forgot-password',
          name: 'forgot-password-page',
          component: require('@/components/Authentication/ForgotPassword').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
