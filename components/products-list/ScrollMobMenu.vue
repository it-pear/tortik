<template>
  <div class="scrollmob-menu">
    <ul>
      <li
        v-for="category in categories"
        :key="category._id"
        class=""
        :class="{ 'current': $route.params.category === `${category._id}` }"
      >
        <nuxt-link :to="`/category/${category._id}`">
          {{ category.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ScrollMobMenu',
  async asyncData({store}) {
    const categories = await store.dispatch('category/fetch')
    return {categories}
  },
  data() {
    return {
      categories: null,
      handleScrollTop: null,
      windowTop: 0
    };
  },
  
  mounted() {
    fetch(`/api/category`)
    .then(response => response.json())
    .then(json => this.categories = json)
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop
      let menu = document.querySelector('#tabs-nav').offsetTop + 170
      if (this.windowTop > menu) {
        document.querySelector('.scrollmob-menu').classList.add("scrollmob-menu-active")
      } else {
        document.querySelector('.scrollmob-menu').classList.remove("scrollmob-menu-active")
      }
    }
  }
}
</script>

<style lang="scss">
  .scrollmob-menu {
    position: fixed;
    background: rgba(30, 48, 68, 1);
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0;
    transition: all 0.3s;
    ul {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
      li {
        flex: 0 0 100%;
        max-width: max-content;
        margin: 0 0;
        a {
          padding: 15px 15px;
          display: block;
          font-weight: 500;
          color: white;
          &.nuxt-link-active {
            background: rgba(191, 22, 43, 1);
          }
        }
      }
    }
    @media (min-width: 772px) {
      display: none;
    }
  }
  .scrollmob-menu-active {
    opacity: 1;
    z-index: 10000;
  }
</style>
