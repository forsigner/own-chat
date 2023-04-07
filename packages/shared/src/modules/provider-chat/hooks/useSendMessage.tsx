import { fetchChatStream, fetchModels } from '../../../common/request'
import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import { useMessages } from './useMessages'
import { useSettings } from './useSettings'
import { HistoryMsgQueue } from '../../../common/historyMsgQueue'
import { emitter } from '../../../common/emitter'

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

    const { maxToken, historyMsgLength, temperature, top_p, frequencyPenalty, presencePenalty } =
      settings
    const historyMsgQueue = new HistoryMsgQueue(historyMsgLength, messages, newMsg)

    try {
      await fetchChatStream({
        params: {
          temperature: temperature,
          presence_penalty: presencePenalty,
          stream: true,
          top_p: top_p,
          model: 'gpt-3.5-turbo',
          max_tokens: Number(maxToken || '2000'),
          messages: historyMsgQueue.getHistoryMsgQueue(),
        },
        onMessage(text, done) {
          if (!done) {
            updateMessage(text)
            emitter.emit('SCROLL_ANCHOR', '')
          }
        },
        onError(error) {
          console.log('error', error)
        },
        onController(controller) {
          console.log('controller', controller)
        },
      })
    } catch (error) {
      console.log('error:', error)
    }
  }

  return { sendMessage }
}
