import { Message } from "../hooks"
import { ChatCompletionResponseMessage } from 'openai'

export class HisteryMsgQueue {
  histeryMsgQueue: ChatCompletionResponseMessage[]
  maxSize: number

  constructor(maxSize: number, message: Message[]) {
    this.histeryMsgQueue = []
    this.maxSize = maxSize

    let times = 0
    const messageTemp = []
    for (let dynamicLength = message.length - 1; dynamicLength >= 0; dynamicLength--) {
      const element = message[dynamicLength];
      if (times < maxSize) {
        times = times + 1
        messageTemp.push({
          role: element.role,
          content: element.content
        })
      } else {
        break
      }
    }

    this.histeryMsgQueue = messageTemp
  }

  enqueue(item: Message) {
    if (this.histeryMsgQueue.length >= this.maxSize) {
      this.histeryMsgQueue.shift()
    }
    this.histeryMsgQueue.push(item)
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    return this.histeryMsgQueue.shift()
  }

  front() {
    if (this.isEmpty()) {
      return null
    }
    return this.histeryMsgQueue[0]
  }

  isEmpty() {
    return this.histeryMsgQueue.length === 0
  }

  size() {
    return this.histeryMsgQueue.length
  }

  gethisteryMsgQueue() {
    return this.histeryMsgQueue
  }
}
