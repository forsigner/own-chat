import { ChatCompletionResponseMessage } from 'openai'
import { Message } from '../modules/provider-chat/hooks'

export class HistoryMsgQueue {
  HistoryMsgQueue: ChatCompletionResponseMessage[]
  maxSize: number

  constructor(maxSize: number, message: Message[], newMsg: ChatCompletionResponseMessage) {
    this.HistoryMsgQueue = []
    this.maxSize = maxSize

    let times = 0
    const historyMsg = []
    for (let dynamicLength = message.length - 1; dynamicLength >= 0; dynamicLength--) {
      const element = message[dynamicLength]
      if (times < maxSize) {
        times = times + 1
        historyMsg.unshift({
          role: element.role,
          content: element.content,
        })
      } else {
        break
      }
    }
    historyMsg.push(newMsg)
    this.HistoryMsgQueue = historyMsg
  }

  enqueue(item: Message) {
    if (this.HistoryMsgQueue.length >= this.maxSize) {
      this.HistoryMsgQueue.shift()
    }
    this.HistoryMsgQueue.push(item)
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    return this.HistoryMsgQueue.shift()
  }

  front() {
    if (this.isEmpty()) {
      return null
    }
    return this.HistoryMsgQueue[0]
  }

  isEmpty() {
    return this.HistoryMsgQueue.length === 0
  }

  size() {
    return this.HistoryMsgQueue.length
  }

  getHistoryMsgQueue() {
    return this.HistoryMsgQueue
  }
}
