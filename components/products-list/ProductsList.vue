<template>
  <div class="row">
    <products-list-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductsListCard from './ProductListCard'

export default {
  name: 'ProductsList',
  components: { ProductsListCard },
  props: {
    products: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
@import "~/assets/sass/initial-variables.sass"

.products-list
  display: flex
  flex-wrap: wrap
  margin: -$product-card-gap
</style>
