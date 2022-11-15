import { storage } from '@/firebaseInit.js'
import { ref, uploadBytes, deleteObject, getDownloadURL } from 'firebase/storage'
import store from '@/store'

const storageRef = ref(storage)

export const saveFile = async (file) => {
  try {
    const fileRef = ref(storageRef, file.name)
    await uploadBytes(fileRef, file)
    return {
      name: file.name,
      url: await getDownloadURL(fileRef),
    }
  } catch (error) {
    console.error('Error while saving file: ', error)
    store.dispatch('alerts/addAlert', {
      id: 'ADD-FILE-INVALID',
      content: 'An error occured while uploading the file',
      type: 'error',
    })
  }
}

export const deleteFile = async (file) => {
  try {
    const fileRef = ref(storageRef, file.name)
    await deleteObject(fileRef)
    return file.name
  } catch (error) {
    console.error('Error while deleting file: ', error)
    store.dispatch('alerts/addAlert', {
      id: 'DELETE-FILE-INVALID',
      content: 'An error occured while deleting the file',
      type: 'error',
    })
  }
}
