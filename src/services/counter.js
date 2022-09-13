import { db, functions } from '@/firebaseInit.js'
import { httpsCallable } from 'firebase/functions'
import { collection, onSnapshot, query } from 'firebase/firestore'
import store from '@/store'

const counterCollection = collection(db, 'counter')

export const initCount = async () => {
  const countCollections = httpsCallable(functions, 'countCollections')
  const result = await countCollections()
  return result.data
}

export const getCountsList = (callback) => {
  try {
    const countsQuery = query(counterCollection)

    return onSnapshot(countsQuery, (querySnapshot) => {
      let allDocs = querySnapshot.docs
      allDocs = allDocs.map((doc) => ({ ...doc.data(), id: doc.id }))
      callback(allDocs)
    })
  } catch (err) {
    console.error('getCountsList Error: ', err)
    store.dispatch('alerts/addAlert', {
      id: 'GET-COUNTS-LIST-ERROR',
      content: 'Wystąpił niespodziewany błąd podczas pobierania liczb zadań',
      type: 'error',
    })
  }
}
