<template>
    
    <div class="row">
        <div class="col-3">

            <img draggable="false" :src="require('../assets/' + ImgName)" alt="">

        </div>

        <div class="col-9">

            <h2>{{ResenhaTitles}}</h2>    

            <slot>Resenha Padrão</slot>

            <span class="font-italic">{{formatDate(ResenhaDate)}}</span>

        </div>

    </div>
</template>

<script>
import Utils from "./../mixins/UtilMixin"
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
        }
        
    },
    mixins:[Utils]
    
}
</script>

<style scoped>
    .row{
        margin-bottom: 30px;
    }
    img{
        width: 100%;
        
    }
    h2{
        cursor: pointer;
        color: #ffff
    }

    
</style>