<template>
  <main class="corpo">
    <container class="box">
      <div class="img"></div>
      <h2 class="texto">Essa é a descrição da imagem 1, Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
    </container>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
.corpo {
  width: 100%;
  height: calc(100% - 100px);
  position: fixed;
  background-color: #111111;
  background-image: url(@/assets/fundo.png);
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
}

.box {
  width: 80%;
  height: 25%;
  position: relative;
  left: 10%;
  top: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #FE7D20;
}

.img {
  width: 200px;
  height: 150px;
  background-color: red;
  margin: 20px;
}

.texto {
  color: #FE7D20;
  font-size: 20px;
  margin-right: 50px;
}
</style>>

