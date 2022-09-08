<template>
  <footer class="footer">
    <img src="../assets/logo-ibook.svg" alt="">
    <p>Copyright &copy; 2022 iBook</p>
  </footer>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component({})
export default class Footer extends Vue {
}
</script>
<style lang="scss" scoped>
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    background: #292929;
    width: 100%;
    height: 80px;
    bottom: 0;
  }

  p {
    color: #f7f7f7;
  }
</style>