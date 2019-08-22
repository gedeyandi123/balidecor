const Home = () => import('@/layouts')
const Login = () => import('@/layouts/login')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    rules: ['public'],
  },
]

export default routes
