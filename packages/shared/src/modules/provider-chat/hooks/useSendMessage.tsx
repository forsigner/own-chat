import { getLocalStorage } from 'stook-localstorage'
import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import { useMessages } from './useMessages'
import { useSettings } from './useSettings'
import { HistoryMsgQueue } from '../../../common/historyMsgQueue'
import { emitter } from '../../../common/emitter'
import { ChatGPTAPI } from '../../../chatgpt-api/chatgpt-api'

export function useSendMessage() {
  const { initNewMessage, updateMessage, messages = [] } = useMessages()
  const { settings } = useSettings()
  async function sendMessage(value = '') {
    if (!value) return

    initNewMessage(value)

    emitter.emit('SCROLL_ANCHOR', '')

    const newMsg = {
      content: value,
      role: ChatCompletionResponseMessageRoleEnum.User,
    }

    const { maxToken, followUpMessageLength, temperature, top_p, presencePenalty } = settings

    const historyMsgQueue = new HistoryMsgQueue(followUpMessageLength, messages, newMsg)

    const api = new ChatGPTAPI({})

    const authorizationCode = getLocalStorage('authorizationCode')
    let urlParams = ''

    // for provider
    if (authorizationCode) urlParams = `?authorizationCode=${authorizationCode}`

    try {
      const url = `/api/chat-stream${urlParams}`
      const result = await api.sendMessage({
        url,
        messages: historyMsgQueue.getHistoryMsgQueue(),
        stream: true,
        completionParams: {
          temperature: temperature,
          presence_penalty: presencePenalty,
          top_p,
          model: 'gpt-3.5-turbo',
          max_tokens: Number(maxToken || '2000'),
        },
        onMessage(text) {
          updateMessage(text)
          emitter.emit('SCROLL_ANCHOR', '')
        },
      })

      console.log('r-------:', result)
    } catch (error) {
      console.log('send message error:', error)
    }
  }

  return { sendMessage }
}
