import { storage } from '@/firebaseInit.js'
import { ref, uploadBytes, deleteObject, getDownloadURL } from 'firebase/storage'

const storageRef = ref(storage)

export const saveFile = async (file) => {
  const fileRef = ref(storageRef, file.name)
  await uploadBytes(fileRef, file)
  return {
    name: file.name,
    url: await getDownloadURL(fileRef)
  }
}

export const deleteFile = async (file) => {
  const fileRef = ref(storageRef, file.name)
  await deleteObject(fileRef)
  return file.name
}