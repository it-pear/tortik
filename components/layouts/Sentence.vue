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
      <h1>Доставка еды и кондитерских изделий "Точка"</h1>
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
  position: relative;
}
h1 {
  position: absolute;
  padding: 0 15px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 64px;
  line-height: 72px;
  height: 72px;
  color: white;
  text-align: center;
  text-transform: none;
}
@media (max-width: 772px) {
  h1 {
    font-size: 42px;
    line-height: 48px;
    height: 148px;
  }
}
.slider img {
  width: 100%;
  object-fit: cover;
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