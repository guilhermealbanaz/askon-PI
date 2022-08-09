<template>
  <div class="tudo">
    <h1>{{resenha.title}}</h1>
  </div>
</template>

<script>
export default {
  props: ['resenha'],
  mounted(){
    console.log(this.resenha)
  }
}
</script>

<style scoped>
  .tudo{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #FE7D20;
  }
</style>