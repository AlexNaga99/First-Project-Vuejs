import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/shop/:category',
    name: 'Shop',
    component: () => import('../views/shop.vue')
  },
  // {
  //   path: '/snkrs',
  //   name: 'snkrs',
  //   component: Snkrs
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to);
  let title_page = `Nike`
  if(to.name){
    title_page += ` - ${to.name}`
  }
  if(to.params.title){
    title_page += ` - ${to.params.title}`;
  }
  document.title = title_page
  next();
})

export default router
