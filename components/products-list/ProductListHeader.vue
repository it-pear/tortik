<template>
  <ul class="top-list" id="navik-header-container-top-list">
    <li
      v-for="link in links"
      :key="link._id"
      v-on:click="onclick"
    >
      <nuxt-link
        :to="`/${link.link}`"
      >
        {{ link.title }}
      </nuxt-link>
    </li>
    <li class="d-block d-md-none">
      <a href="tel:89003510000">8 (900) 351-00-00</a>
    </li> 
    <li class="d-block d-md-none">
      <a href="#" style="text-align: left;margin-top: 8px;line-height: 1.1;">
        г. Геленджик<br>
        ул. Революционная 47
        </a>
    </li>
  </ul>
</template>

<script>

export default {
  name: "ProductsListFilter",
  data() {
    return {
      links: [
        {
          title: 'Меню',
          link: ''
        },
        {
          title: 'О нас',
          link: 'about'
        },
        {
          title: 'Доставка и оплата',
          link: 'delivery'
        },
      ]
    };
  },
  methods: {
    onclick() {
      this.$emit('close')
    },
  }
};
</script>

<style lang="scss">
.categoryimg {
  height: 35px;
}
@media (max-width: 772px) {
  .categoryimg {
    height: 25px;
  }
}
@media (min-width: 772px) {
  #navik-header-container-top-list {
    flex: 0 0 75% !important;
    max-width: 75% !important;
    padding-left: 30px;
    flex-wrap: wrap;
    align-items: center;
    li {
      a {
        font-size: 16px !important;
        line-height: auto !important;
        height: auto !important;
      }
    }
  }
  .navik-menu .top-list:last-child {
    margin-left: auto;
  }
}
</style>