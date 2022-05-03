import { db } from '@/firebaseInit.js'
import { addDoc, collection, onSnapshot, query,  where } from 'firebase/firestore'
import * as dayjs from 'dayjs'

const billsCollection = collection(db, 'bills')

export const addBill = (data) => {
  addDoc(billsCollection, data).catch((err) => {
    console.log('addBill Error: ', err)
  })
}

export const getBillsList = async ({ month, year }, callback) => {
  const start = new Date(`${year}-${month}-01`)
  const end = new Date(`${year}-${month}-01`)
  end.setMonth(end.getMonth() + 1)

  const billsQuery = query(
    billsCollection,
    where('deadline', '>=', start),
    where('deadline', '<', end)
  )


  return onSnapshot(billsQuery, (querySnapshot) => {
    let allDocs = querySnapshot.docs
    allDocs = allDocs.map((doc) => doc.data())
    allDocs = allDocs.map(doc => ({ ...doc, deadline: dayjs(doc.deadline.toDate()) }))
    callback(allDocs)
  })
}