<template>
  <section>

    <div class="container">
      <!-- BARRA DE BUSCA -->
      <input type="text" class="busca" v-model='search' @change='resenhaFiltered(search)'> 
      <ResenhasAskon
        v-for="resenha in resenhaFiltereds"
        :key="resenha.id"
        :ImgName="resenha.img"
        :ResenhaTitles="resenha.title"
        :ResenhaDate="resenha.date"
      >
        <template v-slot:default>
          <p @click="irParaResenha(resenha)">{{ resenha.content | truncate(200) }}</p>
        </template>
        <template v-slot:criador>
          <p>{{ resenha.creator }}</p>
        </template>
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
        search: "",
        resenhas: [],
        resenhaFiltereds: [],
        resenhaPerfis: []
      }
  },
  methods:{
    irParaResenha(resenha){
      this.$router.push({name:"Template", params: {resenha, id:resenha.id}})
    },
    resenhaFiltered(filtro){
      let valores = [];

      valores = this.resenhas.filter((resenha) =>{
        return (
          resenha.title.toLowerCase().indexOf(filtro.toLowerCase()) > -1 ||
          resenha.content.toLowerCase().indexOf(filtro.toLowerCase()) > -1
        );
      });
      this.resenhaFiltereds = valores
      return valores
    },
    resenhaPerfil(usuario){
      let perfil = [];

      perfil = this.resenhas.filter((resenha) =>{
        return(
          resenha.creator.toLowerCase().indexOf(usuario.toLowerCase()) > -1
        );
      });
      this.resenhaPerfis = perfil
      return perfil
    }
  },
  created(){
        this.resenhas = [{
          id:1,
          title:'League of Legends Resenha',
          content: 'GUILHERME ipsum dolor sit amet consectetur adipisicing elit. Hic, eum sint reprehenderit, cumque, corporis autem dignissimos consequuntur repellendus sapiente iste officiis porro obcaecati doloremque numquam dolore iusto sed accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum nobis praesentium maxime magni officiis facilis quibusdam libero suscipit dolorum nisi, quam molestias, reprehenderit expedita in! Ad voluptates quisquam laudantium.',
          date:'2020-01-01',
          img: 'yasuo.jpg',
          creator: 'Guilherme',
        },{
          id:2,
          title:'Elden Ring Resenha',
          content: 'SODRE ipsum dolor sit amet consectetur adipisicing elit. Hic, eum sint reprehenderit, cumque, corporis autem dignissimos consequuntur repellendus sapiente iste officiis porro obcaecati doloremque numquam dolore iusto sed accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum nobis praesentium maxime magni officiis facilis quibusdam libero suscipit dolorum nisi, quam molestias, reprehenderit expedita in! Ad voluptates quisquam laudantium.',
          date:'2020-02-03',
          img: 'elden.jpg',
          creator: 'Rodrigo',
        },{
          id:3,
          title:'Fortnite resenha',
          content: 'RODRIGO ipsum dolor sit amet consectetur adipisicing elit. Hic, eum sint reprehenderit, cumque, corporis autem dignissimos consequuntur repellendus sapiente iste officiis porro obcaecati doloremque numquam dolore iusto sed accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum nobis praesentium maxime magni officiis facilis quibusdam libero suscipit dolorum nisi, quam molestias, reprehenderit expedita in! Ad voluptates quisquam laudantium.',
          date:'2020-06-04',
          img: 'akali.jpg',
          creator: 'Guilherme',
        }]
      },
    mounted(){
      this.resenhaFiltered('')
    }
        
  
  }
</script>

<style>
  section{
    padding: 741px 0;
    margin-top: -613px;
    background-color: #111 ;
  }

  section p, span{
    cursor: pointer;
    color: #FE7D20;
  }
  section p:hover {
    color: #d8854b
  }
  .busca {
    position: fixed;
    top: 37px;
    width: 300px;
    height: 30px;
    background-color: #111111;
    border: 1px solid #FE7D20;
    right: 185px;
    padding: 3px;
    color: #FE7D20;
    border-radius: 5px;
  }
</style>

