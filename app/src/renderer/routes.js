export default [
  {
    path: '/home',
    name: 'font-browser',
    component: require('pages/FontBrowser/Index')
  },
  {
    path: '/',
    name: 'font-renderer',
    component: require('pages/FontRenderer')
  },
  {
    path: '*',
    redirect: '/renderer'
  }
]
