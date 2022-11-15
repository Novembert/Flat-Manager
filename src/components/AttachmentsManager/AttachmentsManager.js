import { clone } from 'lodash'
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation.vue'

export default {
  components: {
    DeleteConfirmation,
  },
  props: {
    files: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      open: false,
      filesToSave: [],
      addAttachmentMode: false,
      fileDeleteDialog: null,
    }
  },
  methods: {
    save() {
      const filesCopy = clone(this.files)
      filesCopy.push(...this.filesToSave)
      this.$emit('attachments-change', { old: this.files, new: filesCopy })
      this.filesToSave = []
      this.addAttachmentMode = false
    },
    async deleteFile() {
      const oldFiles = JSON.parse(JSON.stringify(this.files))
      let filesCopy = JSON.parse(JSON.stringify(this.files))
      filesCopy = await filesCopy.filter((file) => file.url !== this.fileDeleteDialog)
      this.fileDeleteDialog = null
      setTimeout(() => {
        this.$emit('attachments-change', { old: oldFiles, new: filesCopy })
      }, 200)
    },
    downloadFile({ url, name }) {
      const xhr = new XMLHttpRequest()
      xhr.responseType = 'blob'
      xhr.onload = function () {
        var blob = xhr.response
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = name
        link.click()
        URL.revokeObjectURL(link.href)
      }
      xhr.open('GET', url)
      xhr.send()
    },
  },
}
