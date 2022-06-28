<template>
    <nav class="navbar">
        <img src="@/assets/logo.jpg" class="imagem-logo" alt="">
        <a class="link-nav">Reviews</a>
        <a class="link-nav">About Us</a>
        <a class="link-nav">Profile</a>
        <input type="text" class="busca">
        <a><div class="perfil"></div></a>
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

    .imagem-logo {
    width: 150px;
    height: 100px;
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
