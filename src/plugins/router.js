import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/routes'

Vue.use(Router)

function getRoutes() {
  return routes.map(i => {
    return i
  })
}

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: getRoutes(),
})
