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
          <div class="name_cetegory">
            Популярные блюда
          </div>
        </div>
        <div class="row">
          <products-list-card
            v-for="product in filteredPosts.slice(0, 10)" 
            :key="product._id"
            :product="product"
            v-if="product.category != '625bd4ac61d7c5c1475c5b5f'"
          />
        </div>
        <ScrollMobMenu />

      </div>
    </section>
   
  </div>
</template>

<script>
import ProductsListCard from '~/components/products-list/ProductListCard'
import ProductsListFilter from '~/components/products-list/ProductsListFilter'
import ScrollMobMenu from '~/components/products-list/ScrollMobMenu'

export default {
  head: {
    title: `Доставка суши, роллов, пиццы, напитков в Геленджике. Честные цены, выгодные условия | ${process.env.appName}`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Доставка суши, роллов и пиццы в Геленлжике и Геленджикском районе. Свежие, вкусные блюда на вашем столе от Takeshi без перерывов и выходных. Выгодные цены и бесплатная доставка от 800 руб'
      }
    ],
  },
  async asyncData({store}) {
    const products = await store.dispatch('post/fetch')
    const categories = await store.dispatch('category/fetch')
    return {products, categories}
  },
  components: {
    ProductsListCard,
    ProductsListFilter,
    ScrollMobMenu
  },
  computed: {
    filteredPosts() {
      return this.products.filter(p => p.recommend === true)
    }
  }
}
</script>

<style lang="scss">
  
</style>