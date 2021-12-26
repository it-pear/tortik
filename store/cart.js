import Vue from 'vue'

export const state = () => ({
  products: {}
})

export const getters = {
  productsList: (state) => {
    return Object.values(state.products)
  },
  productsQty: (state) => {
    let qty = 0
    for (const product of Object.values(state.products)) {
      qty += product.qty
    }
    return qty
  },
  totalPrice: (state) => {
    let price = 0
    for (const product of Object.values(state.products)) {
      price += product.price * product.qty
    }
    return price
  }
}

export const mutations = {
  addProduct (state, { product, price }) {
    const key = product._id + price
    if (state.products[key]) {
      // increment
    } else {
      // add new
      Vue.set(state.products, key, {
        key,
        product,
        price,
        qty: 1
      })
    }
  },
  changeProductQty (state, { productKey, step }) {
    if (step < 0 && state.products[productKey].qty < 2) { // qty can't be less than 1
      return false
    }
    Vue.set(state.products[productKey], 'qty', state.products[productKey].qty + step)
  },
  removeProduct (state, { productKey }) {
    Vue.delete(state.products, productKey)
  },
  clear (state) {
    Vue.set(state, 'products', {})
  }
}

export const actions = {
  // async submit ({ commit, getters }, { name, phone, adres }) {
  //   const posts = []
  //   let description = ''
  //   for (const cartProduct of getters.productsList) {
  //     posts.push(cartProduct.product._id)
  //     description += `${cartProduct.product.title}`
  //     const piece = cartProduct.qty > 1 ? 'pieces' : 'piece'
  //     description += ` - ${cartProduct.qty} ${piece} <br>`
  //   }
  //   const success = await this.$store.dispatch('order/create', name, phone, adres, posts)
  //   if (success) {
  //     commit('clear')
  //   }
  //   return success
  // }

  async create ({commit, getters}, {name, phone, adres, cartprice}) {
    const posts = []
    for (const cartProduct of getters.productsList) {
      posts.push(
        {
          _id: cartProduct.product._id,
          title: cartProduct.product.title,
          count: cartProduct.qty,
          imageUrl: cartProduct.product.imageUrl,
          totalprice: cartProduct.product.price * cartProduct.qty
        }
      )
    }

    // console.log(posts)
    

    try{
      const formData = {
        name,
        phone,
        adres,
        cartprice,
        posts
      }
      commit('clear')
      return await this.$axios.$post('http://62.113.98.94:3000/api/order/admin', formData)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
}
 