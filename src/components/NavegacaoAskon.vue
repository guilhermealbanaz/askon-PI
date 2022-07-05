<template>
    <nav class="navbar">
        <img draggable="false" src="@/assets/logo.jpg" class="imagem-logo" alt="">
        <router-link to="/"><a class="link-nav">Reviews</a></router-link>
        <router-link to="/sobre"><a class="link-nav">About Us</a></router-link>
        <a class="link-nav">Profile</a>
        <router-link to="/criar"><a class="link-nav">Criar</a></router-link>
        <input type="text" class="busca">
        <a>
            <router-link to='/login'><div class="perfil"></div></router-link>
        </a>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #111111;
    border-bottom: 1px solid #FE7D20;
}

.navbar a{
    color: #FE7D20;
}

.imagem-logo {
    width: 123px;
    height: 84px;
    margin-right: 50px;
}

.link-nav {
    color: #FE7D20;
    text-decoration: none;
    font-size: 20px;
}

.busca {
    background-color: #111111;
    border: 1px solid #FE7D20;
    border-radius: 10px;
    width: 350px;
    height: 40px;
    background-image: url(@/assets/lupa.png);
    background-size: contain;
    background-position: 8px;
    background-repeat: no-repeat;
    padding-left: 60px;
    color: #FE7D20;
}

.perfil {
    width: 70px;
    height: 70px;
    background-color: #FE7D20;
    border-radius: 50%;
}
</style>>
