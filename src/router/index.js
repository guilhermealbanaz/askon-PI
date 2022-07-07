import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeAskon from '@/views/HomeAskon.vue';
import CriarResenhasAskon from '@/views/CriarResenhasAskon.vue'
import AskonError from '@/components/AskonError.vue' 
import AboutAskon from '@/components/AboutAskon.vue'
import LoginAskon from '@/views/LoginAskon.vue'
import Resenha from '@/views/ResenhaIndividualAskon.vue'
import Register from '@/views/RegisterAskon.vue'

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
        path:'/criar', alias: '/resenha',
        component: CriarResenhasAskon,
        props: true,
      },
      {
        path: '/sobre', alias: '/sobrenos',
        component: AboutAskon,
        props: true,
      },
      {
        path:'/login',
        component: LoginAskon,
        props: true,
      },
      {
        path:'/individual',
        component: Resenha,
        props: true,
      },
      {
        path:'/register',
        component: Register,
        props: true,
      },
      {
        path: '*',
        component: AskonError,
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
