<template>
  <div>
    <HeaderSingle :product="product" />
    <section id="product-1" class="pt-100 single-product division pb-4">
      <div class="container">
        <div class="row">
          <!-- PRODUCT IMAGE -->
          <div class="col-lg-7">
            <product-gallery :product="product" />
          </div>	<!-- END PRODUCT IMAGE -->

          <!-- PRODUCT DISCRIPTION -->
          <div class="col-lg-5">
            <div class="product-description">

              <!-- TITLE -->
              <div class="project-title">

                <!-- Title -->
                <h2 class="h2-lg"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{ product.title }}</font></font></h2>
                <!-- Price -->
                <div class="project-price">
                  <h4 class="h4-xl yellow-color">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">
                        {{ product.price }} ₽ублей 
                      </font>
                    </font>
                  </h4>
                </div>

              </div>

              <div class="product-txt">

                <!-- Text -->
                <p class="p-md grey-color">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">
                      {{product.text}}
                    </font>
                  </font>
                </p>

                <!-- Product Data -->
                <div class="product-info">

                  <div v-if="product.variants && product.variants.length > 0">
                    <div class="product-info__color">
                      <div class="field" :class="{ 'field--invalid': isSelectedColorInvalid }">
                        <label class="field__label">Select a color:</label>
                        <select v-model="selectedColor" class="field__input">
                          <option
                            v-for="variant in product.variants"
                            :key="variant.id"
                            :value="variant.color"
                          >
                            {{ variant.color }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div v-if="sizes.length > 0" class="product-info__size">
                      <div class="radio-buttons" :class="{ 'radio-buttons--invalid': isSelectedSizeInvalid }">
                        <div class="radio-buttons__header">
                          Select a size:
                        </div>
                        <div
                          v-for="size in sizes"
                          :key="size"
                          class="radio-buttons__option"
                        >
                          <input :id="`size-${size}`" v-model="selectedSize" type="radio" name="size" :value="size">
                          <label :for="`size-${size}`">{{ size }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <!-- Add To Cart -->
                <button class="add-to-cart-btn bg-yellow ico-20 text-center" @click="addToCart">
                  <span class="flaticon-shopping-bag">
                  </span>
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">
                      Добавить в корзину
                    </font>
                  </font>
                </button>

              </div>

            </div>
          </div>

        </div>	  
      </div><br>	  

    </section>

    <CommonRecommendProductsList :cateoryProduc="`${product.category}`" />
    
  </div>
</template>

<script>
import AppComment from '@/components/main/Comment'
import ProductGallery from '~/components/product-details/ProductGallery'
import HeaderSingle from '~/components/layouts/HeaderSingle'
import AppCommentForm from '@/components/main/CommentForm'
import CommonRecommendProductsList from '~/components/products-list/CommonRecommendProductsList'


export default {
  layout: 'single',
  validate({params}) {
    return Boolean(params.id)
  },
  head() {
    return {
      title: `${this.product.title} | ${process.env.appName}`
    }
  },
  async asyncData({store, params}) {
    const product = await store.dispatch('post/fetchById', params.id)
    await store.dispatch('post/addView', product)
    return {
      product: {...product, views: ++product.views}
    }
  },
  data() {
    return {
      canAddComment: true,
      input: '1',
      count: 1
    }
  },
  methods: {
    createCommentHandler(comment) {
      this.product.comments.unshift(comment)
      this.canAddComment = false
    },
    addToCart () {
      this.$store.commit('cart/addProduct', {
        product: this.product,
        price: this.product.price
      })
    }
  },
  components: {
    AppComment,
    AppCommentForm,
    CommonRecommendProductsList,
    HeaderSingle,
    ProductGallery
  }
}
</script>

<style lang="scss" scoped>
  .post {
    max-width: 100%;
    margin: 0 auto;
  }
  .add-to-cart-btn {
    border: none;
  }
  .post-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;
  }

  .post-image img {
    width: 100%;
    height: auto;
  }

  .post-header {
    margin-bottom: 1.5rem;
  }

  .post-content {
    margin-bottom: 2rem;
  }

  .aside{
    padding-left: 30px;
  }
</style>

