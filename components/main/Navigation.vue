<template>
  <nav>
    <nuxt-link to="/" class="logo">
      Овощной
    </nuxt-link>
    <div class="cart">
      <p>товаров в корзине - </p>
    </div>
  </nav>
</template>




<style lang="scss" scoped>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 100%;
    border-bottom: 1px solid #e6e6e6;
    .logo {
      font-size: 18px;
      text-decoration: none;
      font-weight: 500;
      color: rgb(6, 2, 14);
    }
  }
  .cart {

  }
</style>