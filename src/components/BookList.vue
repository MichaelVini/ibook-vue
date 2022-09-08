<template>
  <section class="book-list">
    <p><b>Lançamentos</b></p>
    <div class="book-list__items">
      <div class="book-item" v-for="book in books" :key="book.id">
        <img src="../assets/livro1.jpg" alt="">
        <p>{{ book.title }}</p>
        <p>{{ book.author }}</p>
        <p>{{ book.price }}</p>
      </div>
    </div>
  </section>  
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({})
export default class BookList extends Vue {
  public books: object = [];
  
  created() {
    this.getBooks();
  }

  public getBooks() {
    this.books = this.$store.getters.books;
  }
}
</script>
<style lang="scss" scoped>

.book-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px;
  margin: 28px 132px;
  height: 100%;

  &__items {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  }
}

img {
  width: 75%;
  margin: 16px 0;
}

p {
  font-size: 22px;
}

</style>