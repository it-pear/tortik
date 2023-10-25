<template>
  <div>
    <br>
    <br>
    <About />
    <Sales />
  </div>
</template>

<script>
import About  from '~/components/layouts/About'
import Sales from '~/components/layouts/Sales'
export default {
  layout: 'single',
  head: {
    title: `Доставка блюд японской и итальянской кухни в Геленджике. Солидное меню, приятные цены | ${process.env.appName}`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Сервис доставки суши, роллов и пиццы в Геленджике и Геленджикском районе. Всегда вкусные, свежие блюда на повседневном и праздничном столе. Быстрая бесплатная доставка — от 45 мин, от 800 руб'
      }
    ],
  },
  head() {
    return {
      title: `О нас`
    }
  },
  components: {
    About,
    Sales
  }
  
}
</script>

<style lang="scss" scoped>
</style>

