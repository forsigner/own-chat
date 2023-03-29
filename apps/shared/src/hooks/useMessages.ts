import { mutateLocalStorage, useLocalStorage } from 'stook-localstorage'
import { ChatCompletionResponseMessageRoleEnum, ChatCompletionResponseMessage } from 'openai'

export interface Message extends ChatCompletionResponseMessage {
  date: string
  streaming?: boolean
}

const key = 'messages'

export const useMessages = () => {
  // const list: Message[] = [
  //   {
  //     content: '珠海的邮编是什么?',
  //     date: '2023/3/27 22:31:29',
  //     role: ChatCompletionResponseMessageRoleEnum.Assistant,
  //   },
  // ]

  const [messages = [], setMessages] = useLocalStorage<Message[]>(key, [])

  function initNewMessage(value: string) {
    setMessages((messages) => {
      messages.push({
        content: value,
        date: new Date().toLocaleDateString(),
        role: ChatCompletionResponseMessageRoleEnum.User,
      })

      messages.push({
        content: '',
        date: new Date().toLocaleDateString(),
        role: ChatCompletionResponseMessageRoleEnum.Assistant,
        streaming: true,
      })
    })
  }

  function updateMessage(content: string) {
    mutateLocalStorage(key, (messages: Message[]) => {
      messages[messages.length - 1].streaming = false
      messages[messages.length - 1].content = content
    })
  }

  return {
    messages: !messages ? [] : messages,
    setMessages,
    initNewMessage,
    updateMessage,
  }
}
