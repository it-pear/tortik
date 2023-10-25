<template>
  <div id="tabs-nav">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <ul class="tabs-1 ico-55 red-tabs clearfix">
            <li
              v-for="category in categories"
              :key="category._id"
              class="tab-link"
              :class="{ 'current': $route.params.category === `${category._id}` }"
              v-if="category.slug != 'pizza'"
            >
              <nuxt-link :to="`/category/${category._id}`">
                <img class="categoryimg" :src="`${category.imageUrl}`" alt="">
                <h5 class="h5-sm">
                  {{ category.title }}
                </h5>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="menu-products"></div>
  </div> <!-- END TABS NAVIGATION -->
</template>

<script>


export default {
  name: 'ProductsListFilter',
  props: {
    categories: Array
  }
}
</script>

<style lang="scss">
  .categoryimg{
    max-height: 55px;
  }
</style>