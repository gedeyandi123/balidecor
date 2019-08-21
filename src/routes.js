const Layout = () => import('@/layouts')
const Login = () => import('@/layouts/login')

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    rules: ['public'],
  },
]

export default routes
