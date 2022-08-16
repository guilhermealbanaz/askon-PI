<template>
    <div class="tudo">
        <div class="container">
            <div class="box-perfil">
                <div class="img-perfil"></div>
                <p class="texto-perfil">Nome</p>
                <p class="texto-perfil">Resenhas</p>
                <p class="texto-perfil">Mudar Senha</p>
                <p class="texto-perfil">Alterar foto</p>
                <p class="texto-perfil">Sair</p>
            </div>
            <div class="resenhas-perfil">
                <p class="texto-resenha">Suas Resenhas:</p>
                <div class="box-resenha">Resenha do usuário 1</div>
                <div class="box-resenha">Resenha do usuário 2</div>
                <div class="box-resenha">Resenha do usuário 3</div>
            </div>
            <router-link to="/"><div class="voltar"></div></router-link>
        </div>
    </div>
</template>

<script> 
export default {
    

}
    
</script>

<style scoped>
    .tudo {
        background-color: #111;
        width: 100%;
        height: 100%;
        position: fixed;
    }
    .container {
        position: relative;
        min-width: 90%;
        min-height: 80%;
        top: 10%;
        background-color: #111;
        border-radius: 10px;
        border: 1px solid #FE7D20;
        display: flex;
        justify-content: space-around;
    }
    .box-perfil {
        margin-top: 30px;
        width: 250px;
        height: 700px;
        border: 1px solid #FE7D20;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .resenhas-perfil {
        margin-top: 30px;
        width: 1200px;
        height: 700px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 70px;
    }
    .texto-resenha {
        color: #FE7D20;
        font-size: 30px;
    }
    .box-resenha {
        width: 800px;
        height: 200px;
        background-color: #FE7D20;
        border-radius: 10px;
        font-size: 30px;
        color: aliceblue;
    }
    .texto-perfil {
        font-size: 20px;
        color: #FE7D20;
    }
    .img-perfil {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #FE7D20;
    }
    .voltar {
        margin-top: 25px;
        width: 50px;
        height: 50px;
        position: relative;
        top: 0;
        background-image: url(../assets/seta.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 80%;
    }
</style>