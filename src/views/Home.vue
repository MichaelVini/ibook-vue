<template>
  <div class="home">
    <Header />
    <h1>Bem-vindo ao <b>iBook</b></h1>
    <BookList />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'; 
import BookList from '@/components/BookList.vue'; 

@Component({
  components: {
    Header,
    Footer,
    BookList
  },
})
export default class Home extends Vue {
}
</script>
<style lang="scss" scoped>

.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

h1 {
  font-size: 66px;
  margin: 80px auto 0 auto;
  font-weight: 400;
}

</style>
