<template>
  <div>
    <AppHeader />
    <div id="page" class="page">
      <Sentence />

      <Nuxt />
      <About />
      <Sales />
      <Contacts />
      <Delivery />
    
    </div>
    
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/layouts/AppHeader'
import AppFooter from '~/components/layouts/AppFooter'
import About  from '~/components/layouts/About'
import Sales from '~/components/layouts/Sales'
import Contacts from '~/components/layouts/Contacts'
import Delivery from '~/components/layouts/Delivery'
import Sentence from '~/components/layouts/Sentence'

export default {
  components: {
    AppHeader,
    AppFooter,
    About,
    Sales,
    Contacts,
    Delivery,
    Sentence
  }
}
</script>

<style>

</style>
