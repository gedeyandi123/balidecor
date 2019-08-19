const Home = () => import('@/pages/Home')
const Medium = () => import('@/pages/Medium')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/medium',
    name: 'Medium',
    component: Medium,
  },
]

export default routes
