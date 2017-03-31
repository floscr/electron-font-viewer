export default [
  {
    path: '/',
    name: 'font-browser',
    component: require('pages/FontBrowser/Index')
  },
  {
    path: '*',
    redirect: '/'
  }
]
