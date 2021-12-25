<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="cart-table mb-70">
            <table id="myTable">
              <thead>
                <tr>
                  <th scope="col">Продукт</th>
                  <th scope="col">Цена</th>
                  <th scope="col">Количество</th>
                  <th scope="col">Итого</th>
                  <th scope="col">Удалить</th>
                </tr>
              </thead>

              <tbody>

                <tr
                  v-for="cartProduct in cartProducts"
                  :key="cartProduct.key"
                >

                  <td data-label="Продукт" class="product-name">
                    <div class="cart-product-img">
                      <img :src="`${cartProduct.product.imageUrl}`" alt="cart-preview">
                    </div>
                    
                    <div class="cart-product-desc">
                      <h5 class="h5-sm">{{ cartProduct.product.title }}</h5>
                      <p class="p-sm">
                        <span v-if="cartProduct.product.variants && cartProduct.product.variants.length > 0">
                          (Размер: <strong>{{ cartProduct.size }}</strong>)
                        </span>
                      </p>
                    </div>
                  </td>

                  <td data-label="Цена" class="product-price">
                    <h5 class="h5-md">{{ cartProduct.product.price }} ₽</h5>
                  </td>
                  <td data-label="Количество" class="product-qty">
                    <div class="cart-list-item__qty-block">
                      <img
                        src="~/assets/icons/minus.svg"
                        alt="decrement"
                        class="cart-list-item__action"
                        @click="changeQty(cartProduct.key, -1)"
                      >
                      <span class="cart-list-item__qty-count">{{ cartProduct.qty }}</span>
                      <img
                        src="~/assets/icons/plus.svg"
                        alt="increment"
                        class="cart-list-item__action"
                        @click="changeQty(cartProduct.key, 1)"
                      >
                    </div>
                  </td>
                  <td data-label="Итого" class="product-price">
                    <h5 class="h5-md">{{ cartProduct.product.price * cartProduct.qty }} ₽</h5>
                  </td>
                  <td data-label="Удалить" class="td-trash">
                    <img
                      src="~/assets/icons/trash.svg"
                      alt="delete"
                      class="cart-list-item__action"
                      @click="remove(cartProduct.key)"
                    >
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>




      <div class="row">
        <div class="col-lg-12">
          <div class="cart-checkout bg-lightgrey ">
            <h5 class="h5-lg">Итоговая цена</h5>
            <table>
              <tbody>
                <tr class="last-tr">
                  <td>Всего</td>
                  <td></td>
                  <td class="text-right">{{ cartPrice }} ₽ублей</td>
                </tr>
              </tbody>
            </table>
            <!-- <button class="btn btn-md btn-salmon tra-salmon-hover">Оформить заказ</button> -->
          </div>
        </div> 
      </div>
    </div>
  </div>    
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CartProductsList',
  computed: {
    ...mapGetters({
      cartProducts: 'cart/productsList',
      cartPrice: 'cart/totalPrice'
    })
  },
  methods: {
    changeQty (productKey, step) {
      this.$store.commit('cart/changeProductQty', { productKey, step })
    },
    remove (productKey) {
      this.$store.commit('cart/removeProduct', { productKey })
    }
  }
}
</script>

<style lang="scss" scoped>

.container{
  padding-top: 100px;
}

</style>
