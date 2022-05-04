import * as dayjs from 'dayjs'
import * as _ from 'lodash'

export const generateMonths = () => {
  let result = []
  for (let i = 0; i < 12; i++) {
    result.push({
      title: _.capitalize(dayjs().month(i).format('MMMM')),
      value: i + 1
    })
  }
  return result
}

export const generateYears = () => {
  const start = 2021
  const end = 2050
  let result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

export const findNewAttachments = (oldAttachments, newAttachments) => {
  const oldAttachmentsNames = oldAttachments.map(att => att.name)
  return newAttachments.filter(
    attachment => !oldAttachmentsNames.includes(attachment.name)
  )
}

// finds an array of attachments that you have to delete from Firebase Storage
// because they arent used anymore
export const findAttachmentsToDelete = (oldAttachments, newAttachments) => {
  const newAttachmentsNames = newAttachments.map(att => att.name)
  return oldAttachments.filter(
    attachment => !newAttachmentsNames.includes(attachment.name)
  )
}