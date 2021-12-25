<template>
<div>
  <VueSlickCarousel
    ref="carousel" 
    :arrows="false"
    :dots="true"
    :autoplay="true"
    :autoplaySpeed="3000"
    :swipe="false"
  >
    <div class="slider">
      <img src="@/assets/img/full-fon.jpg" />
      <img src="@/assets/img/mb-fon.jpg" />
    </div>
  </VueSlickCarousel>
  
</div>
  
</template>


<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel }
};
</script> 

<style>
.slider{
  height: 100vh;
}
.slider img {
  width: 100%;
}
.slider img:first-child{
    display: block;
  }
  .slider img:last-child{
    display: none;
  }
  .salmon-color{
    padding-top: 60px;
  }
@media (max-width: 772px){
  /* .slider img {
    width: auto;
  height: 100%;
} */
  .slider{
    height: 100vh;
    padding-top: 80px;
  }
  .slider img:first-child{
    display: none;
  }
  .slider img:last-child{
    display: block;
  }
  .salmon-color{
    padding-top: 120px;
  }
  /* .slick-slider img{
    width:100%;
  } */
}
</style>