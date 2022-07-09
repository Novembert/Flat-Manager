import * as _ from 'lodash'

const state = () => ({
  items: [],
  timeouts: [],
})

const getters = {
  alertsList: (state) => {
    return state.items
  },
}

const actions = {
  async addAlert({ commit, state, dispatch }, { id, timeout = 4000, ...rest }) {
    if (state.find((el) => el.id === id)) {
      await dispatch('removeAlert', id)
    }
    await commit('addItem', { id, timeout, ...rest })
    const timeoutId = await window.setTimeout(() => {
      dispatch('removeAlert', id)
    }, timeout)
    commit('addTimeout', { id, timeoutId })
  },
  async removeAlert({ commit }, id) {
    await commit('removeItem', id)
    await commit('removeTimeout', id)
  },
}

const mutations = {
  addItem(state, content) {
    const newItems = _.clone(state.items)
    newItems.push(content)
    state.items = newItems
  },
  removeItem(state, id) {
    const newItems = _.clone(state.items)
    const index = newItems.findIndex((el) => el.id === id)
    newItems.splice(index, 1)
    state.items = newItems
  },
  addTimeout(state, content) {
    const newTimouts = _.clone(state.timeouts)
    newTimouts.push(content)
    state.timeouts = newTimouts
  },
  removeTimeout(state, id) {
    const newTimouts = _.clone(state.timeouts)
    const index = newTimouts.findIndex((el) => el.id === id)
    newTimouts.splice(index, 1)
    state.timeouts = newTimouts
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
