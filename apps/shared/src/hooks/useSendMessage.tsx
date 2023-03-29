import { requestChatStream } from '../common/request'
import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import { useMessages } from './useMessages'

export function useSendMessage() {
  const { initNewMessage, updateMessage } = useMessages()
  async function sendMessage(value = '') {
    if (!value) return

    initNewMessage(value)

    const payload = [
      {
        content: value,
        date: '',
        role: ChatCompletionResponseMessageRoleEnum.User,
      },
    ]

    try {
      await requestChatStream(payload, {
        onMessage(text, done) {
          if (!done) {
            updateMessage(text)
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
