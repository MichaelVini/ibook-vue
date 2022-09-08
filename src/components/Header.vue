<template>
  <header>
    <nav>
      <img src="../assets/logo-ibook.svg" alt="">
      <div class="nav__item">
        <router-link to="/">
          Home
        </router-link>
      </div>
      <div class="nav__item">
        <router-link to="/about">
          About
        </router-link>
      </div>
    </nav>
  </header>  
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }

  nav {
    display: flex;
    justify-content: space-around;
    background: #292929;
    width: 372px;
    height: 60px;
    border-radius: 50px;
    align-items: center;

  }

  .nav__item {
    color: #f7f7f7;
  }
</style>