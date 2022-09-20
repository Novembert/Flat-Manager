import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('user', ['login']),
  },
}
