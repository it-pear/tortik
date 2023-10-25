<template>
  <div>
    <HeaderSingle :category="category.title" :product="product" />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ul class="breadcumbers">
            <li><nuxt-link to="/">Главная</nuxt-link> > </li>
            <li><p>{{category.title}}</p></li>
          </ul>
        </div>
      </div>
    </div>
    <section id="menu-6" class="wide-70 menu-section division">
      
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="section-title mb-60 ">
              <h2 class="h2-xl">Наше меню</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <products-list-filter :categories="categories" />
        </div>
        <div class="name_cetegory">
          {{category.title}}
        </div>
        <div class="row">
          <products-list-card
            v-for="product in products" 
            :key="product._id"
            :product="product"
          />
        </div>
      </div>
    </section>
    <ScrollMobMenu />
  </div>
</template>

<script>
import HeaderSingle from '~/components/layouts/HeaderSingle'
import ProductsListFilter from '~/components/products-list/ProductsListFilter'
import ProductsListCard from '~/components/products-list/ProductListCard'
import ScrollMobMenu from '~/components/products-list/ScrollMobMenu'
export default {
  layout: 'single',
  data() {
    return {
      product: {
        title: ''
      }
    }
  },
  head() {
    return {
      title: `Каталог | ${this.category.title}`
    }
  },
  mounted() {
    let menu = document.querySelector('#tabs-nav').offsetTop + 200
    window.scrollTo(0,menu)
  },
  async asyncData({store, params}) { 
    const category = await store.dispatch('category/fetchById', params.id)
    await store.dispatch('category/addView', category)
    const products = await store.dispatch('post/fetchCatPosts', params.id)
    const categories = await store.dispatch('category/fetch')
    return {
      category: {...category, views: ++category.views},
      categories,
      products
    }
  },
  components: {
    HeaderSingle,
    ProductsListFilter,
    ProductsListCard,
    ScrollMobMenu
  }
}
</script>

<style lang="scss">
.name_cetegory {
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 14px;
}

</style>

