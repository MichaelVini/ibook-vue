<template>
  <div class="about">
    <Header />
    <h2>O que é o <b>iBook</b>?</h2>
    <section class="about__content">
      <div>
        <p>
          O iBook é um projeto de estudo de Vue.js, que tem como objetivo criar um sistema de cadastro e leitura de livros, com a possibilidade de adicionar, editar e excluir livros.
        </p>
        <p>
          O incentivo ao avanço tecnológico, assim como o aumento do diálogo entre os diferentes setores produtivos ainda não demonstrou convincentemente que vai participar na mudança do retorno esperado a longo prazo.
          A certificação de metodologias que nos auxiliam a lidar com a contínua expansão de nossa atividade aponta para a melhoria dos métodos utilizados na avaliação de resultados.
        </p>
      </div>
      <img src="../assets/presentation.svg" alt="">
    </section>
    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'; 
import Component from 'vue-class-component';

@Component({ components: { Header, Footer } })
export default class About extends Vue {

}
</script>
<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  &__content {
    display: flex;
    margin: 0 auto;
    width: 55%;
    gap: 32px;
  }

  h2 {
    font-size: 66px;
    margin: 0 auto;
    margin: 80px auto;
    font-weight: 400;
  }

  p {
    margin: 8px auto;
    font-size: 24px;
  }

  img {
    width: 600px;
  }
}
</style>
