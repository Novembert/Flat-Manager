export default {
  data () {
    return {
      pageTitle: ''
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