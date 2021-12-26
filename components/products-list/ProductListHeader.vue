<template>
  <ul class="top-list" id="navik-header-container-top-list">
    <li
      v-for="category in categories"
      :key="category._id"
      v-on:click="onclick"
    >
      <nuxt-link
        :to="`/category/${category._id}`"
      >
        {{ category.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
const host = '62.113.98.94'
export default {
  name: "ProductsListFilter",
  data() {
    return {
      categories: null
    };
  },
  methods: {
    onclick() {
      this.$emit('close')
    },
  },
  mounted() {
    fetch(`${host}/api/category`)
    .then(response => response.json())
    .then(json => this.categories = json)
  }
};
</script>

<style lang="scss">
.categoryimg {
  max-height: 55px;
}
@media (min-width: 772px) {
  #navik-header-container-top-list {
    flex: 0 0 75% !important;
    max-width: 75% !important;
    padding-left: 30px;
    flex-wrap: wrap;
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