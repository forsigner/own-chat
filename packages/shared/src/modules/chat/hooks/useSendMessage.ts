import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import { Message, Mutator } from '@own-chat/api-sdk'
import { useSetting } from './useSetting'
import { useToken, useUser } from '../../../stores'
import { fetchChatStream } from '../../../common/request'
import { useAddMessage } from './useAddMessage'
import { isProd } from '../../../common'
import { useProviders } from './useProviders'

export function useSendMessage() {
  const { token } = useToken()
  const { user } = useUser()
  const { setting } = useSetting()
  const { addMessage } = useAddMessage()
  const { activeProvider } = useProviders()

  function initAnswer() {
    const newMessage = {
      userId: user.id,
      sessionId: setting.activeSessionId!,
      role: ChatCompletionResponseMessageRoleEnum.Assistant,
      content: '',
      streaming: true,
      createdAt: new Date().toString(),
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

  async function sendChatRequest(value: string) {
    const messages = [
      {
        content: value,
        role: ChatCompletionResponseMessageRoleEnum.User,
      },
    ]

    let host: string = ''

    if (process.env.NEXT_PUBLIC_PLATFORM === 'DESKTOP') {
      host = 'https://www.ownchat.me'
      // host = !isProd ? 'http://localhost:4000' : 'https://www.ownchat.me'
    }

    await fetchChatStream({
      params: {
        temperature: 1,
        presence_penalty: 0,
        stream: true,
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 2000,
      },
      baseURL: host,
      token,
      async onMessage(text, done) {
        console.log('text:', text)
        if (!done) {
          updateMessageState(text)
          return
        }

        await addMessage(text, ChatCompletionResponseMessageRoleEnum.Assistant)
      },
      onError(error) {
        console.log('error', error)
      },
      onController(controller) {
        console.log('controller', controller)
      },
    })
  }

  async function sendMessage(value: string) {
    try {
      // Firstly, save user message to server
      await addMessage(value)

      // init an empty answer message
      initAnswer()

      await sendChatRequest(value)
    } catch (error) {
      console.log('error:', error)
    }
  }

  return { sendMessage }
}
