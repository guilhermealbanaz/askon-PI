<template>
    <div>
        <main class="corpo">
            <box-review-askon/>
            <box-jogos-askon/>
        </main>
    </div>
</template>

<script>
import BoxJogosAskon from '../components/BoxJogosAskon.vue';
import BoxReviewAskon from '../components/BoxReviewAskon.vue';
export default {
  components: { 
    BoxReviewAskon,
    BoxJogosAskon,
    },

}
</script>

<style scoped>
    .corpo {
    display: flex;
    width: 100%;
    height: calc(100% - 100px);
    position: fixed;
    background-color: #111111;
    background-image: url(@/assets/fundo.png);
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
}
    input[type="file"] {
    display: none;
}
    ::-webkit-scrollbar {
    width: 0;
}
    *{
    margin: 0;
    padding: 0;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
    }
</style>