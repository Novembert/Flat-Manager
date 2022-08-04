const state = () => ({
  active: false,
})

const getters = {
  isActive: (state) => {
    return state.active
  },
}

const mutations = {
  setActive(state, data) {
    state.active = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}
