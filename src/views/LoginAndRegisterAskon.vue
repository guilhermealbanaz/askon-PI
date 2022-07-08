<template>
    <div>
        <transition name='fade-login' mode="out-in">
            <div class='login' v-if="action == 'login'" key="login">
                <form method="post">
                    <div class="bloco-login">
                            <div class="bloco-img-login"></div>
                    </div>
                        <div class="bloco-login-1">
                            <div class="conteudo-login-1">
                                <h1 class="texto-login-1">Login</h1>
                                    <input class="input-login-1" type="email" placeholder="Email">
                                    <input class="input-login-1" type="password" placeholder="Senha">
                                    <a class="texto-link-1">Esqueceu sua senha?</a>
                                    <a ><router-link to="/"><button class="botão-login-1">Logar</button></router-link></a>
                                    <a ><button class="botão-login-1" @click.prevent="ChangeAction('seila')">Register</button></a>
                            </div>
                        </div>
                </form>
            </div>
            <div class='register' v-if="action != 'login'" key="register">
                <form method="post"></form>
                    <div class="bloco-logo">
                        <div class="bloco-img"></div>
                    </div>
                        <div class="bloco-register">
                            <div class="conteudo-register">
                            <h1 class="texto-login">Register</h1>
                            <input class="input-register" type="name" placeholder="Nome">
                            <input class="input-register" type="email" placeholder="Email">
                            <input class="input-register" type="password" placeholder="Senha">
                            <input class="input-register" type="password" placeholder="Confirme a senha">
                                <button class="botão-register">Registrar</button>
                                <a class="texto-register" @click.prevent="ChangeAction('login')">Voltar</a>
                            </div>
                        </div>
            </div>
        </transition>
    </div> 
</template>

<script>
export default {
    data(){
        return{
            action: 'login'
        }
    },
    methods:{
        ChangeAction(action){
            this.action = action;
        }
    }
}
</script>

<style scoped>
    * {
    margin: 0;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .fade-login-enter, .fade-login-leave-to{
        opacity: 0;
    }
    .fade-login-enter-active, .fade-login-leave-active{
        transition: opacity ease-in-out .3s ;
    }
    .bloco-login {
        height: 100%;
        width: 50%;
        position: fixed;
        background-color: #111111;
    }
    .bloco-img-login {
        width: 400px;
        height: 350px;
        background-image: url(../assets/logo.jpg);
        background-repeat: no-repeat;
        background-size: contain;
        margin: 270px auto;
        border: 1px solid #FE7D20;
    }
    .bloco-login-1 {
        width: 50%;
        height: 100%;
        position: fixed;
        right: 0px;
        background-color: #FE7D20;
    }
    .conteudo-login-1 {
        width: 800px;
        height: 560px;
        padding-top: 40px;
        margin: 180px auto;
        display: flex;
        flex-direction: column;
        gap: 50px;
        align-items: center;
    }
    .texto-login-1 {
        color: #111111;
        font-size: 60px;
    }
    .input-login-1 {
        width: 380px;
        padding-left: 10px;
        padding-right: 10px;
        height: 35px;
        border-radius: 10px;
        border: 1px solid white;
        background-color: #111111;
        margin-left: 10px;
        transition: all 0.2s ease-out;
        color: #FE7D20;
    }
    .input-login-1::placeholder {
        color: #FE7D20;
    }
    .input-login-1:focus {
        background-color: #FE7D20;
        color: white;
    }
    .texto-link-1 {
        color: #111111;
        text-decoration: none;
        font-size: 20px;
    }
    .botão-login-1 {
        width: 250px;
        height: 50px;
        border-radius: 5px;
        background-color: #111111;
        border: 1px solid white;
        color: #FE7D20;
        font-size: 25px;
        transition: all 0.2s ease-out
    }
    .botão-login-1:hover {
        background-color: #FE7D20;
        color: #111111;
        cursor: pointer;
    }

    .bloco-logo {
        height: 100%;
        width: 50%;
        position: fixed;
        background-color: #111111;
        right: 0;
    }
    .bloco-img {
        width: 400px;
        height: 350px;
        background-image: url(../assets/logo.jpg);
        background-repeat: no-repeat;
        background-size: contain;
        margin: 270px auto;
        border: 1px solid #FE7D20;
    }
    .bloco-register {
        width: 50%;
        height: 100%;
        position: fixed;
        left: 0;
        background-color: #FE7D20;
    }
    .conteudo-register {
        width: 800px;
        height: 560px;
        padding-top: 40px;
        margin: 180px auto;
        display: flex;
        flex-direction: column;
        gap: 50px;
        align-items: center;
    }
    .texto-login {
        color: #111111;
        font-size: 60px;
    }
    .input-register {
        width: 380px;
        padding-left: 10px;
        padding-right: 10px;
        height: 35px;
        border-radius: 10px;
        border: 1px solid white;
        background-color: #111111;
        margin-left: 10px;
        transition: all 0.2s ease-out;
        color: #FE7D20;
    }
    .input-register::placeholder {
        color: #FE7D20;
    }
    .input-register:focus {
        background-color: #FE7D20;
        color: white;
    }
    .botão-register {
        width: 250px;
        height: 50px;
        border-radius: 5px;
        background-color: #111111;
        border: 1px solid white;
        color: #FE7D20;
        font-size: 25px;
        transition: all 0.2s ease-out
    }
    .botão-register:hover {
        background-color: #FE7D20;
        color: #111111;
        cursor: pointer;
    }
    .texto-register {
        cursor: pointer;
        font-size: 30px;
        text-decoration: none;
        color: #111111;
    }
</style>