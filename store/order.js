
export const actions = {
  async fetchAdmin({commit}) {
    try {
      return await this.$axios.$get('http://62.113.98.94:3000/api/order/admin')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetch({commit}) {
    try {
      return await this.$axios.$get('http://62.113.98.94:3000/api/order')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async remove({commit}, id) {
    try {
      return await this.$axios.$delete(`http://62.113.98.94:3000/api/order/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit}, {id, text}) {
    try {
      return await this.$axios.$put(`http://62.113.98.94:3000/api/order/admin/${id}`, {text})
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async create ({commit}, {name, phone, adres, posts}) {

    try{
      // const fd = new FormData()

      // fd.append('name', name)
      // fd.append('phone', phone)
      // fd.append('adres', adres)
      // // fd.append('posts', posts)
      // // asd = JSON.stringify(Object.fromEntries(fd.entries()))
      // // console.log(asd)
      const user = {
        name,
        phone,
        adres
      }
      return await this.$axios.$post('http://62.113.98.94:3000/api/order/admin', user)

    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchAdminById({commit}, id) {
    try {
      return await this.$axios.$get(`http://62.113.98.94:3000/api/order/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchById({commit}, id) {
    try {
      return await this.$axios.$get(`http://62.113.98.94:3000/api/order/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async addView({commit}, {views, _id}) {
    try {
      return await this.$axios.$put(`http://62.113.98.94:3000/api/order/add/view/${_id}`, {views})
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}
