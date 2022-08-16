<template>
    
    <div class="todo">
        <div class="">

            <img class="imagem" draggable="false" :src="require('../assets/' + ImgName)" alt=""/>  <!-- IMAGEM -->

        </div>

        <div class="">
            <h2 class="titulo-resenha">{{ResenhaTitles}}</h2>    <!--TITULO -->
            <slot>Resenha Padrão</slot>  <!-- CORPO -->
            <span class="data">{{ formatDate(ResenhaDate) }}</span>  <!-- DATA -->
            <span class="data">
                <slot name='criador'></slot> <!-- CRIADOR -->
            </span>
        </div>

    </div>
</template>

<script>
import Utils from "./../mixins/UtilMixin";

export default {
    props:{
        ImgName:{
            type:String,
            required: true,
        },
        ResenhaTitles:{
            type:String,
            required: true,
        },
        ResenhaDate:{
            type:String,
            required: true,
        },
        
        
    },
    mixins:[Utils]
    
}
</script>

<style scoped>
    .todo{
        width: 100%;
        position: relative;
        height: 10%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
    }
    .todo:nth-child(odd) {
        flex-direction: row-reverse;
    }
    .todo:nth-child(odd) img {
        margin-left: 50px;
    }
    .todo:nth-child(even) img {
        margin-right: 50px;
    }
    .todo img {
        width: 350px;
        height: 200px;
    }
    h2{
        cursor: pointer;
        color: #ffff
    }
    #individual .titulo-resenha {
        color: #111;
        margin-left: 400px;
    }
    #individual .imagem {
        border: 2px solid #111;
        border-radius: 10px;
        position: fixed;
        left: 125px;
        margin-left: 0;
    }
    #individual .data {
        margin-left: 400px;
        font-size: 20px;
        color: #111;
    }
</style>