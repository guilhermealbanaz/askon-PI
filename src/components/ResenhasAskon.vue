<template>
    <div>
    <div class="box" v-for="resenha in resenhas" :key="resenha.info">
            <div class='estilo' >
                <h2 class="texto">{{resenha.description}}</h2>
                <img class="imagem-resenha" :src="(resenha.src)" :alt="ImgInfo"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        resenhas:[
            {src: require('@/assets/logo.jpg')}, {description:'Essa é a descrição da imagem 1, Lorem ipsum dolor sit, amet consectetur adipisicing elit'},
            {src: require('@/assets/logo.jpg')}, {description:'Essa é a descrição da imagem 1, Lorem ipsum dolor sit, amet consectetur adipisicing elit'},
            {src: require('@/assets/logo.jpg')}, {description:'Essa é a descrição da imagem 1, Lorem ipsum dolor sit, amet consectetur adipisicing elit'},
            {src: require('@/assets/logo.jpg')}, {description:'Essa é a descrição da imagem 1, Lorem ipsum dolor sit, amet consectetur adipisicing elit'},
      ]
        }
    }
}
</script>

<style>
    .box {
  width: 1800px;
  height: 250px;
  border: 1px solid #FE7D20;
  margin: 50px;
  display: flex;
  align-items: center;
}
.texto {
  color: #FE7D20;
  font-size: 20px;
}
.imagem-resenha {
  height: 200px;
}
.estilo {
  display: flex;
  align-items: center;
  margin-right: 50px;
}
</style>