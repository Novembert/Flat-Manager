import { db } from '@/firebaseInit.js'
import { addDoc, collection } from 'firebase/firestore'

const billsCollection = collection(db, 'bills')

export const addBill = (data) => {
  addDoc(billsCollection, data).catch((err) => {
    console.log('addBill Error: ', err)
  })
}

export const getBillsList = ({ month, year }) => {
  
}