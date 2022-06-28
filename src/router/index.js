import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeAskon from '@/views/HomeAskon.vue';
import CriarResenhasAskon from '@/views/CriarResenhasAskon.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultAskon.vue'),
    children:[
      {
        path:'',
        component: HomeAskon,
      },
      {
        path:'/criar',
        component: CriarResenhasAskon,
        props: true,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
