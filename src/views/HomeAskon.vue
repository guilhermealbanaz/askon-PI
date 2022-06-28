<template>
    <div>
        <NavegacaoAskon/>
        <BodyAskon/>
    </div>
</template>

<script>
import NavegacaoAskon from '@/components/NavegacaoAskon.vue'
import BodyAskon from '@/components/BodyAskon.vue'
export default {
    name: 'App',
    components:{
    NavegacaoAskon,
    BodyAskon
}
}
</script>

<style>
    *{
    margin: 0;
    padding: 0;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
    }
</style>
