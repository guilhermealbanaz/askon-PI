<template>
  <section>

    <div class="container">

      <ResenhasAskon
        v-for="resenha in resenhas"
        :key="resenha.id"
        :ImgName="resenha.img"
        :ResenhaTitles="resenha.title"
        :ResenhaDate="resenha.date"
      >
      
        <p>{{ resenha.content | truncate(200) }}</p>
      
      </ResenhasAskon>
      
    </div>

  </section>
</template>

<script>
import ResenhasAskon from '@/components/ResenhasAskon.vue'
export default {
  components: {ResenhasAskon},
  data(){
    return {
        resenhas: []
      }
  },
  created(){
        this.resenhas = [{
          id:1,
          title:'RESENHAS ASKON',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, eum sint reprehenderit, cumque, corporis autem dignissimos consequuntur repellendus sapiente iste officiis porro obcaecati doloremque numquam dolore iusto sed accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum nobis praesentium maxime magni officiis facilis quibusdam libero suscipit dolorum nisi, quam molestias, reprehenderit expedita in! Ad voluptates quisquam laudantium.',
          date:'2020-01-01',
          img: 'akali.jpg',
        },{
          id:2,
          title:'RESENHAS ASKON2',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, eum sint reprehenderit, cumque, corporis autem dignissimos consequuntur repellendus sapiente iste officiis porro obcaecati doloremque numquam dolore iusto sed accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum nobis praesentium maxime magni officiis facilis quibusdam libero suscipit dolorum nisi, quam molestias, reprehenderit expedita in! Ad voluptates quisquam laudantium.',
          date:'2020-02-03',
          img: 'yasuo.jpg',
        },{
          id:3,
          title:'RESENHAS ASKON3',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, eum sint reprehenderit, cumque, corporis autem dignissimos consequuntur repellendus sapiente iste officiis porro obcaecati doloremque numquam dolore iusto sed accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum nobis praesentium maxime magni officiis facilis quibusdam libero suscipit dolorum nisi, quam molestias, reprehenderit expedita in! Ad voluptates quisquam laudantium.',
          date:'2020-06-04',
          img: 'akali.jpg',
        }]
      }
  }
</script>

<style>
  section{
    padding: 696px 0;
    margin-top: -613px;
    background-color: #111 ;
  }

  section p, span{
    color: #FE7D20;
  }

</style>

