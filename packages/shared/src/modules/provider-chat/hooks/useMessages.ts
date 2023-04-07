import { mutateLocalStorage, useLocalStorage } from 'stook-localstorage'
import { useAsyncStorage } from 'stook-async-storage'
import { ChatCompletionResponseMessageRoleEnum, ChatCompletionResponseMessage } from 'openai'
import { getCurrentSession, useSessions } from './useSessions'
import { useMemo } from 'react'

export interface Message extends ChatCompletionResponseMessage {
  sessionId: string
  createdAt: string
  streaming?: boolean
}

const key = 'messages'

export const useMessages = () => {
  const { currentSession } = useSessions()
  const { loading, data: messages = [], setData: setMessages } = useAsyncStorage<Message[]>(key, [])

  function initNewMessage(value: string) {
    const { id: sessionId } = getCurrentSession()
    setMessages((messages) => {
      messages.push({
        sessionId,
        content: value,
        createdAt: new Date().toLocaleDateString(),
        role: ChatCompletionResponseMessageRoleEnum.User,
      })

      messages.push({
        sessionId,
        content: '',
        createdAt: new Date().toLocaleDateString(),
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

  const msg = useMemo(
    () => messages.filter((item) => item.sessionId === currentSession?.id),
    [currentSession, messages],
  )

  return {
    loading,
    messages: msg,
    setMessages,
    initNewMessage,
    updateMessage,
  }
}
