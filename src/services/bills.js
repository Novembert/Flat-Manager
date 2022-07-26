import { db } from '@/firebaseInit.js'
import { addDoc, collection, onSnapshot, query, updateDoc, where, doc } from 'firebase/firestore'
import * as dayjs from 'dayjs'
import store from '@/store'

const billsCollection = collection(db, 'bills')

export const addBill = (data) => {
  addDoc(billsCollection, data).catch((err) => {
    console.log('addBill Error: ', err)
    store.dispatch('alerts/addAlert', {
      id: 'ADD-BILL-INVALID',
      content: 'Wystąpił niespodziewany błąd podczas dodawania rachunku',
      type: 'error',
    })
  })
}

export const getBillsList = async ({ month, year }, callback) => {
  const start = new Date(`${year}-${month}-01`)
  const end = new Date(`${year}-${month}-01`)
  end.setMonth(end.getMonth() + 1)
  try {
    const billsQuery = query(billsCollection, where('deadline', '>=', start), where('deadline', '<', end))

    return onSnapshot(billsQuery, (querySnapshot) => {
      let allDocs = querySnapshot.docs
      allDocs = allDocs.map((doc) => ({ ...doc.data(), id: doc.id }))
      allDocs = allDocs.map((doc) => ({ ...doc, deadline: dayjs(doc.deadline.toDate()) }))
      callback(allDocs)
    })
  } catch (e) {
    console.log('getBillsList Error: ', e)
    store.dispatch('alerts/addAlert', {
      id: 'GET-BILLS-LIST-ERROR',
      content: 'Wystąpił niespodziewany błąd podczas pobierania listy rachunków',
      type: 'error',
    })
  }
}

export const editBill = (id, data) => {
  const documentRef = doc(db, 'bills', id)
  updateDoc(documentRef, data).catch((err) => {
    console.log('editBill Error: ', err)
    store.dispatch('alerts/addAlert', {
      id: 'EDIT-BILL-INVALID',
      content: 'Wystąpił niespodziewany błąd podczas edytowania rachunku',
      type: 'error',
    })
  })
}
