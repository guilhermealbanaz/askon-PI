import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeAskon from '@/views/HomeAskon.vue';
import CriarResenhasAskon from '@/views/CriarResenhasAskon.vue'
import AboutAskon from '@/components/AboutAskon.vue'
import LoginAskon from '@/views/LoginAndRegisterAskon.vue'
import Resenha from '@/views/ResenhaIndividualAskon.vue'
import PerfilAskon from '@/views/PerfilAskon.vue'



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
        name: 'Template',
        path:`/individual/:id`,
        component: Resenha,
        props: true,
      },
    ]
  },
    {
      path: '',
      name: 'blank',
      component: () => import('@/layouts/BlankAskon.vue'),
      children:[
        {
          path: '/login',
          component: LoginAskon,
        },
        {
          path: '/perfil',
          component: PerfilAskon,
        }
    ]}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
