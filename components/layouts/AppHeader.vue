<template>
  <header
    id="header-3"
    class="header navik-header header-transparent header-shadow header-transparent-on"
  >
    <div class="container">
      <div class="navik-header-container">
        <div class="callusbtn">
          <a href="tel:89288815612"><i class="fas fa-phone"></i></a>
        </div>
        <div
          class="logo"
          data-mobile-logo="@/assets/img/logo.png"
          data-sticky-logo="@/assets/img/logo.png"
        >
          <nuxt-link to="/"
            ><img src="@/assets/img/logo.png" alt="header-logo"
          /></nuxt-link>
          <a href="tel:89288815612" class="tel-mb">+7 (928) 881-56-12</a>
          <div class="basket-ico basket-mb">
            <nuxt-link to="/cart">
              <span class="ico-holder">
                <span class="flaticon-shopping-bag"></span>
                <em class="roundpoint" v-if="qty > 0">{{ qty }}</em>
              </span>
            </nuxt-link>
          </div>
        </div>

        <div
          class="burger-menu"
          v-on:click="onclick"
          v-bind:class="{ menuopen: isActive }"
        >
          <div class="line-menu line-half first-line"></div>
          <div class="line-menu"></div>
          <div class="line-menu line-half last-line"></div>
        </div>

        <nav
          class="navik-menu menu-caret navik-yellow mb-0"
          v-bind:class="{ 'navik-menu-active': isActive }"
        >
        <HeaderList @close="isActive=!isActive" />
          <ul class="top-list">
            <li class="nav-btn yellow-color">
              <a href="tel:89288815612" class="tel-lg">+7 (928) 881-56-12</a>
            </li>
            <li class="basket-ico ico-30 basket-lg">
              <nuxt-link to="/cart">
                <span class="ico-holder">
                  <span class="flaticon-shopping-bag"></span>
                  <em class="roundpoint" v-if="qty > 0">{{ qty }}</em>
                </span>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>



<script>
import HeaderList from "../products-list/ProductListHeader";
import { mapGetters } from "vuex";

export default {
  name: "AppHeader",
  data() {
    return {
      isActive: false
    };
  },
  components: {
    HeaderList,
  },
  computed: {
    ...mapGetters({
      qty: "cart/productsQty"
    }),
  },
  methods: {
    onclick() {
      this.isActive = !this.isActive;
    },
  }
};
</script>


<style lang="scss">
.navikmenuactive {
  .top-list,
  .navik-menu>ul {
    display: flex !important;
  }
}
.header {
  .top-list,
  .navik-menu>ul {
    display: flex !important;
  }
  .navik-menu {
    flex: 0 0 100%;
  }
}

</style>