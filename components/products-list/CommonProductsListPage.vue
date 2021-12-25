<template>

  <section id="menu-6" class="wide-70 menu-section division">
    <div class="container">

      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="section-title mb-60 text-center">
            <h2 class="h2-xl">Наше меню</h2>
          </div>
        </div>
      </div>

      <div id="catalogmenu"></div>
      <products-list-filter />
      
      <!-- <h3 class="text-center">Самый популярные блюда</h3><br><br> -->
      <products-list :loading="productsLoading" :products="products" />
      <ProductPagination />

    </div>
  </section>
</template>

<script>
import ProductsList from './ProductsList'
import ProductsListFilter from './ProductsListFilter'
import ProductPagination from './ProductPagination'

export default {
  name: 'CommonProductsListPage',
  components: { ProductsListFilter, ProductsList, ProductPagination },
  props: {
    loadProducts: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      products: [],
      productsLoading: false
    }
  },
  async created () {
    this.productsLoading = true
    this.products = await this.loadProducts()
    this.productsLoading = false
  }
}
</script>
