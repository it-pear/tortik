const posts = [
  {title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: 'id1'},
  {title: 'Post 2', date: new Date(), views: 22, comments: [1, 2], _id: 'id2'}
]

export const actions = {
  async fetchAdmin({commit}) {
    try {
      return await this.$axios.$get('/api/post/admin')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetch({commit}) {
    try {
      return await this.$axios.$get('/api/post')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async remove({commit}, id) {
    try {
      return await this.$axios.$delete(`/api/post/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit}, {id, text, title, recommend, oldprice}) {
    try {
      return await this.$axios.$put(`/api/post/admin/${id}`, {text, title, recommend, oldprice})
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async uploudImage({commit}, {id, image}) {
    try {
      const fd = new FormData()
      fd.append('image', image, image.name)
      return await this.$axios.$put(`/api/post/uploudImage/${id}`, fd)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async uploudImages({commit}, {id, images}) {
    try {
      const fd = new FormData()
      for( var i = 0; i < images.length; i++ ){
        let file = images[i].raw;
        fd.append('images', file);
      }
      return await this.$axios.$post(`/api/post/uploudImages/${id}`, fd)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async updateImage({commit}, {id, imageUrl}) {
    try {
      return await this.$axios.$put(`/api/post/updateImage/${id}`, {imageUrl})
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async updateImages({commit}, {id, images}) {
    try {
      const fd = new FormData()
      fd.append('image', images)
      return await this.$axios.$put(`/api/post/updateImages/${id}`, fd)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async create ({commit}, {title, text, price, category, categoryname, image, images, recommend}) {

    try {
      const fd = new FormData()
      fd.append('title', title)
      fd.append('text', text)
      fd.append('price', price)
      fd.append('category', category)
      fd.append('categoryname', categoryname)
      fd.append('image', image)
      fd.append('recommend', recommend)
      for( var i = 0; i < images.length; i++ ){
        let file = images[i].raw;
        fd.append('images', file);
      }
      // for (var pair of fd.entries()) {
      //   console.log(pair[0]+ ', ' + pair[1]); 
      // }
      return await this.$axios.$post('/api/post/admin', fd)

    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchAdminById({commit}, id) {
    try {
      return await this.$axios.$get(`/api/post/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchById({commit}, id) {
    try {
      return await this.$axios.$get(`/api/post/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchCatPosts({commit}, id) {
    try {
      const posts = await this.$axios.$get(`/api/post/`)
      const post = posts.filter(post => {
        return post.category == id
      })
      return post
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async addView({commit}, {views, _id}) {
    try {
      return await this.$axios.$put(`/api/post/add/view/${_id}`, {views})
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async getAnalytics({commit}) {
    try {
      return await this.$axios.$get('/api/post/admin/get/analytics')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}
