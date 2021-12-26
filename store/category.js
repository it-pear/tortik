// const categories = [
//   {title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: 'id1'},
//   {title: 'Post 2', date: new Date(), views: 22, comments: [1, 2], _id: 'id2'}
// ]
// const host = '62.113.98.94'
export const actions = {
  async fetchAdmin({commit}) {
    try {
      return await this.$axios.$get('http://62.113.98.94/api/category/admin')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetch({commit}) {
    try {
      return await this.$axios.$get('http://62.113.98.94/api/category')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async remove({commit}, id) {
    try {
      return await this.$axios.$delete(`http://62.113.98.94/api/category/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit}, {id, title}) {
    try {
      return await this.$axios.$put(`http://62.113.98.94/api/category/admin/${id}`, {title})
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async create ({commit}, {title, slug, image}) {

    try{
      const fd = new FormData()

      fd.append('title', title)
      fd.append('slug', slug)
      fd.append('image', image, image.name)

      return await this.$axios.$post('http://62.113.98.94/api/category/admin', fd)

    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchAdminById({commit}, id) {
    try {
      return await this.$axios.$get(`http://62.113.98.94/api/category/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchById({commit}, id) {
    try {
      return await this.$axios.$get(`http://62.113.98.94/api/category/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchBySlug({commit}, slug) {
    try {
      return await this.$axios.$get(`http://62.113.98.94/api/category/${slug}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async addView({commit}, {views, _id}) {
    try {
      return await this.$axios.$put(`http://62.113.98.94/api/category/add/view/${_id}`, {views})
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  // async getAnalytics({commit}) {
  //   try {
  //     return await this.$axios.$get('http://62.113.98.94/api/category/admin/get/analytics')
  //   } catch (e) {
  //     commit('setError', e, {root: true})
  //     throw e
  //   }
  // }
}
