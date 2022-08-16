<template>
  <section>
    <div class="container">
     <ResenhasAskon id="individual"
        :key='resenha.id' class="vermelho"
        :ImgName="resenha.img"
        :ResenhaTitles="resenha.title"
        :ResenhaDate="resenha.date"
      >
      <div class="conteudo">{{resenha.content}}</div>
      <template v-slot:criador>
        <p class='criador'>{{ resenha.creator }}</p>
      </template>
      </ResenhasAskon>
      <ul class="lista">
        <li class="item">League Of Legends</li>
        <li class="item">Moba</li>
      </ul>
      <div class="box-comentario">
        <input type="text" class="comentar">
      </div>
      <div class="box-interagir">
        <div class="estrelas"></div>
        <div class="curtir" @click="mudar = !mudar" :class="mudar ? 'verm' : 'preto'"></div>
      </div>
    </div>
  </section>
  
</template>

<script>
import ResenhasAskon from '@/components/ResenhasAskon.vue'
export default {
  components: { ResenhasAskon },
  props: ['resenha'],
  data(){
    return{
      mudar: false,
    }
  }
  
}
</script>

<style scoped>
  .criador{
    
    color: #111;
  }
  .container {
    min-width: 90%;
    min-height: 80%;
    position: fixed;
    top: 15%;
    left: 5%;
    background-color: #FE7D20;
    border-radius: 10px;
    padding: 2%;
    display: flex;
  }
  .conteudo {
    width: 85%;
    height: 30%;
    position: fixed;
    top: 400px;
    padding: 1%;
    background-color: #111;
    color: #FE7D20;
  }
  .lista {
    position: fixed;
    left: 545px;
    top: 280px;
}
.box-comentario {
  width: 85%;
  height: 15%;
  position: fixed;
  bottom: 60px;
  background-color: #111;
  border: 1px solid #FE7D20;
  display: flex;
  align-items: flex-end;
  border-radius: 0 0 20px 20px;
}
.comentar {
  width: 100%;
  height: 25%;
  border: 1px solid #FE7D20;
  border-radius: 20px;
  position: relative;
  background-color: #111;
  color: #fff;
  font-size: 15px;
  padding: 10px;
}
.box-interagir {
  width: 400px;
  height: 200px;
  position: relative;
  top: 0;
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.estrelas {
  width: 100%;
  height: 70px;
  border-radius: 10px;
  background-color: #111;
  background-image: url(../assets/estrelas.png);
  background-position: center;
  background-size: 80%;
  background-repeat: no-repeat;
}
.curtir {
  width: 80px;
  height: 80px;
  background-position: center;
  background-size: contain;
  cursor: pointer;
  transition: all 0.2s ease-in;
}
.preto {
    background-image: url(../assets/coracaopreto.png);
}
.verm{
    background-image: url(../assets/coracaovermelho.png);
}
.criador {
  position: fixed;
  font-size: 20px;
  left: 650px;
  top: 230px;
}
</style>