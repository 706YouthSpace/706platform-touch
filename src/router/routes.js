import Home from '@/views/Home'

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/*',
    redirect: '/home'
  }
]
