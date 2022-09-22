import { db } from '@/firebaseInit.js'
import { addDoc, collection, onSnapshot, query, updateDoc, where, doc, deleteDoc } from 'firebase/firestore'
import { deleteFile } from './storage'
import * as dayjs from 'dayjs'
import store from '@/store'

const defaultErrorMessage = 'Wystąpił niespodziewany błąd'

class TasksController {
  constructor(collectionName, label) {
    this.collectionName = collectionName
    this.collection = collection(db, collectionName)
    this.label = label
  }

  addTask(data, errorMessage = defaultErrorMessage) {
    return new Promise((resolve) => {
      store.commit('loader/setActive', true)
      setTimeout(() => {
        addDoc(this.collection, data)
          .catch((err) => {
            console.error(`add${this.label} Error: `, err)
            store.dispatch('alerts/addAlert', {
              id: `ADD-${this.label}-INVALID`,
              content: errorMessage,
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

  addScheduledTask(data, errorMessage = defaultErrorMessage) {
    return new Promise((resolve) => {
      store.commit('loader/setActive', true)
      collection('schedules')
        .doc(this.collection)
        .add(data)
        .catch((err) => {
          console.error(`add${this.label} Error: `, err)
          store.dispatch('alerts/addAlert', {
            id: `ADD-SCHEDULED-${this.label}-INVALID`,
            content: errorMessage,
            type: 'error',
          })
        })
        .then((res) => {
          resolve(res)
        })
        .finally(() => {
          store.commit('loader/setActive', false)
        })
    })
  }

  async getTasksList({ month, year }, callback, errorMessage = defaultErrorMessage) {
    const start = new Date(`${year}/${month}/01`)
    const end = new Date(`${year}/${month}/01`)
    end.setMonth(end.getMonth() + 1)

    try {
      const tasksQuery = query(this.collection, where('deadline', '>=', start), where('deadline', '<', end))

      return onSnapshot(tasksQuery, (querySnapshot) => {
        let allDocs = querySnapshot.docs
        allDocs = allDocs.map((doc) => ({ ...doc.data(), id: doc.id }))
        allDocs = allDocs.map((doc) => ({ ...doc, deadline: dayjs(doc.deadline.toDate()) }))
        callback(allDocs)
      })
    } catch (err) {
      console.error(`get${this.label}sList Error: `, err)
      store.dispatch('alerts/addAlert', {
        id: `GET-${this.label}S-LIST-ERROR`,
        content: errorMessage,
        type: 'error',
      })
    }
  }

  async getAllTasksList(callback, errorMessage = defaultErrorMessage) {
    try {
      const tasksQuery = query(this.collection)

      return onSnapshot(tasksQuery, (querySnapshot) => {
        let allDocs = querySnapshot.docs
        allDocs = allDocs.map((doc) => ({ ...doc.data(), id: doc.id }))
        callback(allDocs)
      })
    } catch (err) {
      console.error(`get${this.label}sList Error: `, err)
      store.dispatch('alerts/addAlert', {
        id: `GET-${this.label}S-LIST-ERROR`,
        content: errorMessage,
        type: 'error',
      })
    }
  }

  editTask(id, data, errorMessage = defaultErrorMessage) {
    const documentRef = doc(db, this.collectionName, id)
    updateDoc(documentRef, data).catch((err) => {
      console.error(`edit${this.label} Error: `, err)
      store.dispatch('alerts/addAlert', {
        id: `EDIT-${this.label}-INVALID`,
        content: errorMessage,
        type: 'error',
      })
    })
  }

  deleteTask(task, errorMessage = defaultErrorMessage) {
    return new Promise((resolve) => {
      store.commit('loader/setActive', true)
      const filesToDelete = task?.files?.map((file) => deleteFile(file)) || []
      Promise.all(filesToDelete)
        .then(
          deleteDoc(doc(db, this.collectionName, task.id)).then((res) => {
            resolve(res)
          })
        )
        .catch((err) => {
          console.error(`delete${this.label} Error: `, err)
          store.dispatch('alerts/addAlert', {
            id: `DELETE-${this.label}-INVALID`,
            content: errorMessage,
            type: 'error',
          })
        })
        .finally(() => {
          store.commit('loader/setActive', false)
        })
    })
  }
}

export default TasksController
