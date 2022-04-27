export default {
  props: {
    filesList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    files: {
      get () { return this.filesList },
      set (value) { this.$emit('update:files-list', value) }
    }
  },
  data () {
    return {
      open: false,
      filesToSave: [],
      addAttachmentMode: false
    }
  },
  methods: {
    save () {
      this.files = this.files.push(...this.filesToSave)
      this.filesToSave = []
      this.addAttachmentMode = false
      console.log(this.files)
    }
  }
}