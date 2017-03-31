export default [
  {
    path: '/',
    name: 'font-browser',
    component: require('pages/FontBrowser')
  },
  {
    path: '*',
    redirect: '/'
  }
]
