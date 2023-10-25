<template>
  <header
    id="header-3"
    class="header navik-header header-transparent header-shadow header-transparent-on"
  >
    <div class="container">
      <div class="navik-header-container">
        <!-- <div class="callusbtn">
          <a href="tel:89003510000"><i class="fas fa-phone"></i></a>
        </div> -->

        <div class="basket-ico basket-mb">
          <nuxt-link to="/cart">
            <span class="ico-holder">
              <span class="flaticon-shopping-bag"></span>
              <em class="roundpoint" v-if="qty > 0">{{ qty }}</em>
            </span>
          </nuxt-link>
        </div>

        <div
          class="logo"
          data-mobile-logo="@/assets/img/logo.svg"
          data-sticky-logo="@/assets/img/logo.svg"
        >
          <nuxt-link to="/"
            ><img src="@/assets/img/logo.svg" alt="header-logo"
          /></nuxt-link>
          <!-- <a href="tel:89003510000" class="tel-mb">8 (900) 351-00-00</a> -->
        </div>

        <div
          class="burger-menu"
          v-on:click="onclick"
          v-bind:class="{ menuopen: isActive }"
        >
          <img src="~/assets/img/burger.svg" alt="">
        </div>
        <nav
          class="navik-menu menu-caret navik-yellow mb-0"
          v-bind:class="{ 'navik-menu-active': isActive }"
        >
        <HeaderList @close="isActive=!isActive" />
          <ul class="top-list">
            <li class="nav-btn yellow-color">
              <a href="tel:89003510000" class="tel-lg">8 (900) 351-00-00</a>
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