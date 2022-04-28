import Navigation from "./Navigation/Navigation.vue";

export default {
  components: {
    Navigation
  },
  data () {
    return {
      pageTitle: '',
      navOpen: false
    }
  },
  watch:{
    $route (){
      this.pageTitle = this.getFirstPartOfTitle(window.document.title);
    }
  },
  created () {
    this.pageTitle = this.getFirstPartOfTitle(window.document.title);
  },
  methods: {
    getFirstPartOfTitle (title) {
      return title.split('|')[0]
    }
  }
}