import { clone } from "lodash"

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
      const filesCopy = clone(this.files)
      filesCopy.push(...this.filesToSave)
      this.files = filesCopy
      this.filesToSave = []
      this.addAttachmentMode = false
    },
    deleteFile (index) {
      const filesCopy = clone(this.files)
      filesCopy.splice(index, 1)
      this.files = filesCopy
    }
  }
}