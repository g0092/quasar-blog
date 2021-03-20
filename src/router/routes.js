
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'PostsList', component: () => import('pages/PostsList.vue') },
      { path: 'PostsCreate', component: () => import('pages/PostsCreate.vue') }
    ]
  }
]

// Always leave this as last one,
// but you can also remove it
routes.push({
  path: '*',
  component: () => import('pages/Error404.vue')
})

export default routes
