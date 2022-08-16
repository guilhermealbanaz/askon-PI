<template>
    <div class="tudo">
      <div class="container">
        <div class="imagem"></div>
        <p class="texto">Somos alunos do Instituto Federal Catarinense, cursamos o ensino médio, integrado ao curso de Informática e estamos
          atualmente no terceiro ano. Usamos linguagens básicas para a construção desse site (javascript e vuejs)!
        </p>
      <div class="box-imagem">
        <div class="bloco-texto">
        <div class="imagem-perfil gui"></div>
          <p class="texto-perfil">Guilherme Bragato Albanaz</p>
            <a href="https://github.com/guilhermealbanaz"><img class="imagem-git" src="../assets/asd.png" alt=""></a>
        </div>
        <div class="bloco-texto">
        <div class="imagem-perfil bonas"></div>
          <p class="texto-perfil">Rodrigo Bonifácio Conceição</p>
            <a href="https://github.com/guilhermealbanaz"><img class="imagem-git" src="../assets/asd.png" alt=""></a>
        </div>
      </div>
      </div>
    </div>        
</template>
    
<script>

  export default {
    
  };
</script>

<style scoped>
    .tudo {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: #111;
    }
    .container {
      width: 61%;
      height: 61%;
      left: 18%;
      top: 20%;
      position: fixed;
      background-color: #111;
      border: 1px solid #FE7D20;
      border-radius: 50px;
    }
    .imagem {
      width: 300px;
      height: 300px;
      background-color: #111;
      border-radius: 50%;
      margin-left: -150px;
      margin-top: -40px;
      background-image: url(../assets/imagem.jpg);
      background-size: 60%;
      background-position: center;
      background-repeat: no-repeat;
      border: 1px solid #FE7D20;
      float: left;
    }
    .texto {
      font-size: 30px;
      color: #fff;
      padding: 3px;
    }
    .box-imagem {
      width: 80%;
      height: 50%;
      display: flex;
      gap: 310px;
      align-items: center;
      position: relative;
      bottom: -50px;
    }
    .imagem-perfil {
      width: 250px;
      height: 250px;
      background-size: cover;
      background-repeat: no-repeat;
      background-color: red;
    }
    .bonas {
      border-radius: 20px;
      background-image: url(../assets/bo.png);
      background-position: 50%;
    }
    .gui {
      border-radius: 20px;
      background-image: url(../assets/guilher.png);
    }
    .imagem-git {
      width: 180px;
      height: 100px;
      margin-left: 30px;
    }
    .bloco-texto {
      display: flex;
      flex-direction: column;
      color: #fff;
    }
    .texto-perfil {
      font-size: 20px;
      text-align: center;
    }
</style>