import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { auth } from '@/firebaseInit'
import router from '@/router'

const state = () => ({
  user: null,
})

const getters = {
  getUser: (state) => {
    return state.user
  },
}

const actions = {
  async login({ commit }) {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
        // The signed-in user info
        commit('setUser', result.user)
        router.push('/')
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('User not found')
            break
          case 'auth/wrong-password':
            alert('Wrong password')
            break
          default:
            alert('Something went wrong')
        }
      })
  },
  async logout({ commit }) {
    await signOut(auth)

    commit('clearUser')

    router.push('/login')
  },
  fetchUser({ commit }) {
    auth.onAuthStateChanged(async (user) => {
      if (user === null) {
        commit('clearUser')
      } else {
        commit('setUser', user)

        if (router.isReady() && router.currentRoute.value.path === '/login') {
          router.push('/')
        }
      }
    })
  },
}

const mutations = {
  setUser(state, user) {
    state.user = user
  },
  clearUser(state) {
    state.user = null
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
