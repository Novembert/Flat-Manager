import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    menu: false,
  }),
  computed: {
    ...mapGetters('user', ['getUser']),
    profileAvatarImage() {
      return this.getUser && this.getUser.photoURL
    },
  },
  methods: {
    ...mapActions('user', ['logout']),
  },
}
