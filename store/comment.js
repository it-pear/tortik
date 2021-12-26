export const actions = {
  async create({commit}, data) {
    try {
      return await this.$axios.$post('http://62.113.98.94:3000/api/comment', data)
    } catch (e) {
      commit('setError', e, {root: true})
    }
  }
}
