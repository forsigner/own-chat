import { Message, Mutator } from '@own-chat/api-sdk'
import { ChatCompletionRequestMessage } from 'openai'
import { getStreamingKey } from '../../../common'
import { updateStreamingStatus } from '../../../common/request'
import { useChatSettings } from './useChatSettings'
import { useMessages } from './useMessages'
import { useTeams } from './useTeams'
import { emitter } from '../../../common/emitter'
import { useUpdateMessage } from './useUpdateMessage'
import { getOpenaiProxy } from '../utils'
import { useGetChatParams } from './useGetChatParams'
import { useChatStatus } from './useChatStatus'
import { ChatGPTAPI } from '../../../chatgpt-api'
import { useAbortController } from './useAbortController'

export function useRegenerateResponse() {
  const { updateMessage } = useUpdateMessage()
  const { activeProvider } = useTeams()
  const { messages = [] } = useMessages()
  const { chatSettings } = useChatSettings()
  const { getChatParams } = useGetChatParams()
  const { setStatus } = useChatStatus()
  const { getAbortController } = useAbortController()

  function updateMessageState(text: string, streaming = false) {
    Mutator.mutateMessages((messages) => {
      messages[messages.length - 1].content = text
      messages[messages.length - 1].streaming = streaming
    })
  }

  function getRequestMessages(value: string, messages: Message[]) {
    // build message context
    const requestMessages = messages
      .map<ChatCompletionRequestMessage>((item) => ({
        content: item.content,
        role: item.role as any,
        name: undefined,
      }))
      .slice(0, messages.length - 1)

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

    updateMessageState('', true)

    const api = new ChatGPTAPI({})

    try {
      const url = `/api/chat-stream`

      const text = await api.sendMessage({
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

      const message = messages[messages.length - 1]
      await updateMessage(message.id, text)

      setStatus('finished')
    } catch (error) {
      console.log('send message error:', error)
      if (typeof error === 'string') {
        const message = messages[messages.length - 1]
        await updateMessage(message.id, error)
      }

      setStatus('finished')
      await updateStreamingStatus(key, true)
    }
  }

  async function regenerateResponse() {
    setStatus('fetching')
    emitter.emit('SCROLL_ANCHOR', '')
    try {
      const message = messages[messages.length - 2]
      await sendChatRequest(message.content)
    } catch (error) {
      setStatus('finished')
    }
  }

  return { regenerateResponse }
}
