<template>
  <div class="box-jogos">
            <input class="nome-jogo" placeholder="Nome do Jogo" type="text">
            <label class="anexo-midia" for="arquivo">Anexar Mídia</label>
            <input type="file" name="arquivo" id="arquivo">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .box-jogos {
    width: 400px;
    height: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    margin-top: 40px;
    margin-left: 27px;
}
.nome-jogo {
    height: 30px;
    background-color: #111111;
    border: 1px solid #FE7D20;
    padding: 5px;
    border-radius: 5px;
    color: #FE7D20;
}
.nome-jogo::placeholder {
    color: #FE7D20;
}
input[type="file"] {
    display: none;
}
.anexo-midia {
    padding: 15px 10px;
    width: 200px;
    background-color: #FE7D20;
    border-radius: 10px;
    color: #111111;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
    transition: all 0.2s ease-out;
}
.anexo-midia:hover {
    background-color: #111111;
    color: #FE7D20;
    border: 1px solid #FE7D20;
}

</style>