import Navigation from './Navigation/Navigation.vue'
import ProfileMenu from './ProfileMenu/ProfileMenu.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Navigation,
    ProfileMenu,
  },
  data() {
    return {
      pageTitle: '',
      navOpen: false,
    }
  },
  watch: {
    $route() {
      this.pageTitle = this.getFirstPartOfTitle(window.document.title)
    },
  },
  computed: {
    ...mapGetters('user', ['getUser']),
  },
  created() {
    this.pageTitle = this.getFirstPartOfTitle(window.document.title)
  },
  methods: {
    getFirstPartOfTitle(title) {
      return title.split('|')[0]
    },
  },
}
