<template>
  <div>
    <div>
      
      <VueSlickCarousel v-bind="slickOptions">
        <div class="sentence"> 
          <img src="~/assets/images/divider-05.jpg" class="fon" alt="">
          <div class="content">
            <img src="~/assets/img/slide11.png" alt="" class="img-action" style="opacity: 0;">
            <h1>Доставка роллов и суши в Геленджике</h1>
            <a href="/#menu-6" class="btn btn-lg btn-red tra-red-hover">
              Смотреть меню
              <img src="~/assets/img/watch-menu.svg" alt="">
            </a>
          </div>
        </div>
        <div class="sentence"> 
          <img src="~/assets/img/slide1.jpg" class="fon" alt="">
          <div class="content">
            <img src="~/assets/img/slide11.png" alt="" class="img-action">
            <h2>Скидка 10% на все наши сэты</h2>
            <a href="/#menu-6" class="btn btn-lg btn-red tra-red-hover">
              Смотреть меню
              <img src="~/assets/img/watch-menu.svg" alt="">
            </a>
          </div>
        </div>
        <div class="sentence"> 
          <img src="~/assets/img/slide2.jpg" class="fon" alt="">
          <div class="content">
            <img src="~/assets/img/slide22.png" alt="" class="img-action">
            <h2>Скидка 10% в день вашего рождения!</h2>
            <a href="/#menu-6" class="btn btn-lg btn-red tra-red-hover">
              Смотреть меню
              <img src="~/assets/img/watch-menu.svg" alt="">
            </a>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false,
        autoplay: true
      },
      
    }
  }
}
</script>

<style lang="scss">
.sentence {
  width: 100%;
  min-height: 100vh;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  position: relative;
  .fon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      top: 0;
      left: 0;
      position: absolute;
      background-color: rgba(17,15,16,0.4);
    }
    @media (max-width: 772px) {
      top: -10vh;
      &:before {
        top: 10vh;
      }
    }
    .img-action {
      width: max-content;
      max-width: 139px;
      height: 85px;
      z-index: 1;
      margin: 0 auto;
      margin-bottom: 15px;
      image-rendering: -webkit-optimize-contrast;
    }
    h1,
    h2 {
      color: white;
      margin-bottom: 24px;
      font-size: 38px;
      text-align: center;
      z-index: 1;
      position: relative;
      @media (max-width: 772px) {
        font-size: 28px;
      }
    }
    .btn {
      display: flex;
      align-items: center;
      max-width: max-content;
      margin: 0 auto;
      z-index: 1;
      position: relative;
      img {
        max-width: 35px;
        margin-left: 8px;
      }
    }
  }
}


</style>