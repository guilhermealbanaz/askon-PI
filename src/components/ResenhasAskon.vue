<template>
    
    <div class="row">
        <div class="notice">

            <img :src="require('../assets/' + ImgName)" alt="">

        </div>

        <div class="notice2">

            <h2>{{ResenhaTitles}}</h2>    

            <p>{{ResenhaContent | truncate(200)}}</p>

            <span class="font-italic">{{ResenhaDate}}</span>

        </div>

    </div>
</template>

<script>
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
        ResenhaContent:{
            type:String,
            required: true,
        },
        ResenhaDate:{
            type:String,
            required: true,
        }
        
    },
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

<style scoped>
    *{
        margin-left: 10px
    }
    .row{
        height: 200px;
        margin-bottom: 30px;
        display: flex
    }
    img{
        width: 200px;
        height: 200px;
        
    }
    h2{
        cursor: pointer;
        color: #ffff
    }
    .notice{
        width: 200px;
        height: 200px;
    }
    .notice2{
        width: 1800px;
    }

    
</style>