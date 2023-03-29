import { fetchChatStream } from '../common/request'
import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import { useMessages } from './useMessages'

export function useSendMessage() {
  const { initNewMessage, updateMessage } = useMessages()
  async function sendMessage(value = '') {
    if (!value) return

    initNewMessage(value)

    const messages = [
      {
        content: value,
        role: ChatCompletionResponseMessageRoleEnum.User,
      },
    ]

    try {
      await fetchChatStream({
        params: {
          temperature: 1,
          presence_penalty: 0,
          stream: true,
          model: 'gpt-3.5-turbo',
          messages: messages,
          max_tokens: 2000,
        },
        onMessage(text, done) {
          console.log('text:', text)
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
