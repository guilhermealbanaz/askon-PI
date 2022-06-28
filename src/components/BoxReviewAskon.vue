<template>
  <div class="box-review">
            <textarea placeholder="Digite aqui a sua resenha" name="review" id="review" cols="90" rows="35" class="text-review"></textarea>
            <input class="anexo-link" placeholder="anexar link" type="url" name="" id="">
            <button class="botao-enviar">Publicar</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .box-review {
    width: 900px;
    height: 770px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 90px;
    margin-top: 40px;
}
  .text-review {
    resize: none;
    border-radius: 7px;
    background-color: #111111;
    border: 1px solid #FE7D20;
    color: #FE7D20;
    padding: 20px;
}
  .text-review::placeholder {
    color: #FE7D20;
    font-size: 20px;
}
  .anexo-link {
    width: 87%;
    background-color: #111111;
    border: 1px solid #FE7D20;
    padding: 5px;
    border-radius: 5px;
    color: #FE7D20;
}
  .anexo-link::placeholder {
    color: #FE7D20;
}
  .botao-enviar {
    width: 250px;
    height: 50px;
    border-radius: 5px;
    background-color: #FE7D20;
    border: none;
    color: #111111;
    font-size: 25px;
    transition: all 0.2s ease-out
}
  .botao-enviar:hover {
    background-color: #111111;
    color: #FE7D20;
    border: 1px solid #FE7D20;
    cursor: pointer;
}
</style>