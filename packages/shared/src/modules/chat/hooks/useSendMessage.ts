import { Message, Mutator, ProviderType } from '@own-chat/api-sdk'
import { ChatCompletionResponseMessageRoleEnum, ChatCompletionRequestMessage } from 'openai'
import { ChatGPTUnofficialProxyAPI, ChatGPTAPI } from '../../../chatgpt-api'
import { getStreamingKey } from '../../../common'
import { updateStreamingStatus } from '../../../common/request'
import { useToken, useUser } from '../../../stores'
import { useAddMessage } from './useAddMessage'
import { useChatSettings } from './useChatSettings'
import { useMessages } from './useMessages'
import { useTeams } from './useTeams'
import { useVisit } from './useVisit'
import { emitter } from '../../../common/emitter'
import { getOpenaiProxy } from '../utils'
import { useGetChatParams } from './useGetChatParams'
import { useRef } from 'react'
import { useChatStatus } from './useChatStatus'
import { useAbortController } from './useAbortController'

export function useSendMessage() {
  const { token } = useToken()
  const { user } = useUser()
  const { visit } = useVisit()
  const { addMessage } = useAddMessage()
  const { activeProvider } = useTeams()
  const { messages = [] } = useMessages()
  const { chatSettings } = useChatSettings()
  const { getChatParams } = useGetChatParams()
  const { setStatus } = useChatStatus()
  const { getAbortController } = useAbortController()

  function initAnswer() {
    const newMessage = {
      userId: user.id,
      sessionId: visit.activeSessionId!,
      role: ChatCompletionResponseMessageRoleEnum.Assistant,
      content: '',
      streaming: true,
    } as Message

    Mutator.mutateMessages((messages) => {
      messages.push(newMessage)
    })
  }

  function updateMessageState(text: string) {
    Mutator.mutateMessages((messages) => {
      messages[messages.length - 1].content = text
      messages[messages.length - 1].streaming = false
    })
  }

  function getRequestMessages(value: string, messages: Message[]) {
    // build message context
    const requestMessages = messages.map<ChatCompletionRequestMessage>((item) => ({
      content: item.content,
      role: item.role as any,
      name: undefined,
    }))

    requestMessages.push({
      content: value,
      role: ChatCompletionResponseMessageRoleEnum.User,
    })

    const followUpMessageLength = chatSettings.followUpMessageLength!
    const len = requestMessages.length

    if (requestMessages.length <= followUpMessageLength) {
      return requestMessages
    }

    return requestMessages.slice(len - followUpMessageLength, len)
  }

  async function sendChatRequest(value: string) {
    const host: string = getOpenaiProxy()
    const requestMessages = getRequestMessages(value, messages)

    const key = getStreamingKey(activeProvider!)

    if (activeProvider?.type === ProviderType.AccessToken) {
      const api = new ChatGPTUnofficialProxyAPI({
        apiReverseProxyUrl: '/api/chat-by-access-token',
        accessToken: activeProvider.accessToken!,
        debug: false,
      })

      try {
        const res = await api.sendMessage(value, {
          onProgress: ({ text }) => {
            if (value === text) return
            setStatus('streaming')
            updateMessageState(text)
            emitter.emit('SCROLL_ANCHOR', '')
            // console.log('partialResponse.text:', text)
          },
        })

        await updateStreamingStatus(key, true)

        await addMessage(res.text, ChatCompletionResponseMessageRoleEnum.Assistant)
      } catch (error) {
        console.log('error--------:', error)
      }

      return
    }

    const api = new ChatGPTAPI({})

    try {
      const url = `/api/chat-stream`
      const result = await api.sendMessage({
        url,
        abortController: getAbortController(),
        messages: requestMessages,
        stream: true,
        completionParams: getChatParams(requestMessages),
        onMessage(text) {
          setStatus('streaming')
          updateMessageState(text)
          emitter.emit('SCROLL_ANCHOR', '')
        },
      })

      await updateStreamingStatus(key, true)
      await addMessage(result, ChatCompletionResponseMessageRoleEnum.Assistant)

      setStatus('finished')
    } catch (error) {
      console.log('send message error:', error)
      if (typeof error === 'string') {
        await addMessage(error, ChatCompletionResponseMessageRoleEnum.Assistant)
      }
      setStatus('finished')
      await updateStreamingStatus(key, true)
    }
  }

  async function sendMessage(value: string) {
    setStatus('fetching')

    try {
      // Firstly, save user message to server
      await addMessage(value, ChatCompletionResponseMessageRoleEnum.User, true)

      // init an empty answer message
      initAnswer()

      emitter.emit('SCROLL_ANCHOR', '')

      await sendChatRequest(value)
    } catch (error) {
      console.log('error:', error)
      setStatus('finished')
    }
  }

  return { sendMessage }
}
