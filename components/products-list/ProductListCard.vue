<template>
  <div class="col-6 col-lg-3">
    
    <nuxt-link
      :to="`/product/${product._id}`"
    >
      <div class="menu-6-item bg-white">
        <div class="menu-6-img rel">
          <div class="hover-overlay">
            <img
              class="img-fluid"
              :src="product.imageUrl"
              :alt="product.title"
            />
            <span class="item-code bg-tra-dark"></span>
            <div class="menu-img-zoom ico-25">
              <a href="images/menu/roll-11-1.jpg" class="image-link">
                <span class="flaticon-zoom"></span>
              </a>
            </div>
          </div>
        </div>

        <div class="menu-6-txt rel">
          <div class="item-rating">
            <div class="stars-rating stars-lg">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>

          <h5 class="h5-sm">{{ product.title }}</h5>
          <div>
            <p style="margin-bottom: 0;font-size: 18px;" v-show="product.oldprice != null"><s>{{product.oldprice}} ₽</s></p>
            <div class="menu-6-price bg-salmon">
            <h5 class="h5-xs white-color">{{ product.price }} ₽</h5>
            </div>
            <div class="add-to-cart bg-yellow ico-10">
              <a @click.prevent="addToCartInlist"
                ><span class="flaticon-shopping-bag"></span> Хочу</a
              >
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "ProductsListCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCartInlist() {
      this.$store.commit("cart/addProduct", {
        product: this.product,
        color: this.selectedColor,
        size: this.selectedSize,
        price: this.product.price,
      });
      // alert('Товар добавлен в корзину')
    },
  },
};
</script>

