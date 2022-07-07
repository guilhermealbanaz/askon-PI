<template>
    <div>
      <div class="bloco-logo">
            <div class="bloco-img"></div>
        </div>
        <div class="bloco-login">
            <div class="conteudo-login">
                <h1 class="texto-login">Login</h1>
                <input class="input-login" type="email" placeholder="Email">
                <input class="input-login" type="password" placeholder="Senha">
                <a class="texto-link">Esqueceu sua senha?</a>
                <a ><router-link to="/"><button class="botão-login">Logar</button></router-link></a>
                <a ><router-link to="/register"><button class="botão-login">Register</button></router-link></a>
            </div>
        </div>
    </div>    
</template>

<script>
export default {

}
</script>

<style scoped>
    * {
    margin: 0;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.bloco-logo {
    height: 100%;
    width: 50%;
    position: fixed;
    background-color: #111111;
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
.bloco-login {
    width: 50%;
    height: 100%;
    position: fixed;
    right: 0px;
    background-color: #FE7D20;
}
.conteudo-login {
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
.input-login {
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
.input-login::placeholder {
    color: #FE7D20;
}
.input-login:focus {
    background-color: #FE7D20;
    color: white;
}
.texto-link {
    color: #111111;
    text-decoration: none;
    font-size: 20px;
}
.botão-login {
    width: 250px;
    height: 50px;
    border-radius: 5px;
    background-color: #111111;
    border: 1px solid white;
    color: #FE7D20;
    font-size: 25px;
    transition: all 0.2s ease-out
}
.botão-login:hover {
    background-color: #FE7D20;
    color: #111111;
    cursor: pointer;
}
</style>