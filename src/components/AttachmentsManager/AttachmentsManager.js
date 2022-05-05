import { clone } from "lodash"

export default {
  props: {
    files: {
      type: Array,
      default: () => []
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
      this.$emit('attachments-change', {old: this.files, new: filesCopy})
      this.filesToSave = []
      this.addAttachmentMode = false
    },
    deleteFile (index) {
      const filesCopy = clone(this.files)
      filesCopy.splice(index, 1)
      this.$emit('attachments-change', {old: this.files, new: filesCopy})
    }
  }
}