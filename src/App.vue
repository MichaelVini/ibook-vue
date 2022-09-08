<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({})
export default class App extends Vue {
  created() {
    this.$store.dispatch('fetchBooks');
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  border: 0;
  outline: none;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:focus {
    outline: none;
  }
  font-family: 'Montserrat', sans-serif;
}

a {
  color: #f7f7f7;
}
</style>
