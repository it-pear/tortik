<template>
  <div>

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
        <products-list-filter :categories="categories" />

        <div class="row">
          <products-list-card
            v-for="product in products.slice(0, 8)"
            :key="product._id"
            :product="product"
          />
          <!-- <products-list-card
            v-for="product in filteredPosts.slice(0, 8)"
            :key="product.id"
            :product="product"
          />
          <products-list-card
            v-for="product in filteredPoststwo.slice(0, 3)"
            :key="product.id"
            :product="product"
          /> -->
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import ProductsListCard from '~/components/products-list/ProductListCard'
import ProductsListFilter from '~/components/products-list/ProductsListFilter'
export default {
  head: {
    title: `Кулинария Кондитерская Геленджик`
  },
  async asyncData({store}) {
    const products = await store.dispatch('post/fetch')
    const categories = await store.dispatch('category/fetch')
    return {products, categories}
  },
  components: {
    ProductsListCard,
    ProductsListFilter
  }
}
</script>

<style lang="scss">

</style>
