<template>
  <section>

    <div class="container">

      <ResenhasAskon
        ImgName="yasuo.jpg"
        ResenhaTitles="RESENHAS ASKON"
        ResenhaContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, eum sint reprehenderit, cumque, corporis autem dignissimos consequuntur repellendus sapiente iste officiis porro obcaecati doloremque numquam dolore iusto sed accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum nobis praesentium maxime magni officiis facilis quibusdam libero suscipit dolorum nisi, quam molestias, reprehenderit expedita in! Ad voluptates quisquam laudantium."
        ResenhaDate="01/04/2022"
      />
      



    </div>

  </section>
</template>

<script>
import ResenhasAskon from '@/components/ResenhasAskon.vue'
export default {
  components: {ResenhasAskon},
  
}
</script>

<style scoped>
  section{
    padding: 50px 0;
    margin-top: 25px;
    background-color: #F37520 ;
  }

</style>

