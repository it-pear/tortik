<template>
  <div>
    <AppHeader />
    <div id="page" class="page">
      <Nuxt />
      <Delivery />
    </div>
    <AppFooter />
  </div>
</template>

<script>

import AppHeader from '~/components/layouts/AppHeader'
import AppFooter from '~/components/layouts/AppFooter'
import Delivery from '~/components/layouts/Delivery'

export default {
  components: {
    AppHeader,
    AppFooter,
    Delivery
  }
}
</script>

<style lang="scss" scoped>
  .menu-section{
    padding-top: 150px;
  }
</style>