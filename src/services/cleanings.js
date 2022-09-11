import { db } from '@/firebaseInit.js'
import { addDoc, collection, onSnapshot, query, updateDoc, where, doc, deleteDoc } from 'firebase/firestore'
import { deleteFile } from './storage'
import * as dayjs from 'dayjs'
import store from '@/store'

const cleaningsCollection = collection(db, 'cleanings')

export const addCleaning = (data) => {
  return new Promise((resolve) => {
    store.commit('loader/setActive', true)
    setTimeout(() => {
      addDoc(cleaningsCollection, data)
        .catch((err) => {
          console.log('addCleaning Error: ', err)
          store.dispatch('alerts/addAlert', {
            id: 'ADD-CLEANING-INVALID',
            content: 'Wystąpił niespodziewany błąd podczas dodawania zadania sprzątania',
            type: 'error',
          })
        })
        .then((res) => {
          resolve(res)
        })
        .finally(() => {
          store.commit('loader/setActive', false)
        })
    }, 200)
  })
}

export const getCleaningsList = async ({ month, year }, callback) => {
  const start = new Date(`${year}/${month}/01`)
  const end = new Date(`${year}/${month}/01`)
  end.setMonth(end.getMonth() + 1)

  try {
    const cleaningsQuery = query(cleaningsCollection, where('deadline', '>=', start), where('deadline', '<', end))

    return onSnapshot(cleaningsQuery, (querySnapshot) => {
      let allDocs = querySnapshot.docs
      allDocs = allDocs.map((doc) => ({ ...doc.data(), id: doc.id }))
      allDocs = allDocs.map((doc) => ({ ...doc, deadline: dayjs(doc.deadline.toDate()) }))
      callback(allDocs)
    })
  } catch (err) {
    console.log('getCleaningsList Error: ', err)
    store.dispatch('alerts/addAlert', {
      id: 'GET-CLEANINGS-LIST-ERROR',
      content: 'Wystąpił niespodziewany błąd podczas pobierania listy zadań sprzątania',
      type: 'error',
    })
  }
}

export const editCleaning = (id, data) => {
  const documentRef = doc(db, 'cleanings', id)
  updateDoc(documentRef, data).catch((err) => {
    console.log('editCleaning Error: ', err)
    store.dispatch('alerts/addAlert', {
      id: 'EDIT-CLEANING-INVALID',
      content: 'Wystąpił niespodziewany błąd podczas edytowania zadania sprzątania',
      type: 'error',
    })
  })
}

export const deleteCleaning = (cleaning) => {
  return new Promise((resolve) => {
    store.commit('loader/setActive', true)
    const filesToDelete = cleaning?.files?.map((file) => deleteFile(file)) || []
    Promise.all(filesToDelete)
      .then(
        deleteDoc(doc(db, 'cleanings', cleaning.id)).then((res) => {
          resolve(res)
        })
      )
      .catch((err) => {
        console.log('deleteCleaning Error: ', err)
        store.dispatch('alerts/addAlert', {
          id: 'DELETE-CLEANING-INVALID',
          content: 'Wystąpił niespodziewany błąd podczas usuwania zadania sprzątania',
          type: 'error',
        })
      })
      .finally(() => {
        store.commit('loader/setActive', false)
      })
  })
}
