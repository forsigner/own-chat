import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import { Message, Mutator, ProviderType } from '@own-chat/api-sdk'
import { useSetting } from './useSetting'
import { useToken, useUser } from '../../../stores'
import { fetchChatStream, updateStreamingStatus } from '../../../common/request'
import { useAddMessage } from './useAddMessage'
import { useTeams } from './useTeams'
import { getStreamingKey } from '../../../common'
import { ChatGPTUnofficialProxyAPI } from '../../../chatgpt-api'

export function useSendMessage() {
  const { token } = useToken()
  const { user } = useUser()
  const { setting } = useSetting()
  const { addMessage } = useAddMessage()
  const { activeTeam } = useTeams()

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

    const key = getStreamingKey(activeTeam!)

    if (activeTeam?.providerType === ProviderType.AccessToken) {
      const api = new ChatGPTUnofficialProxyAPI({
        apiReverseProxyUrl: 'http://localhost:4000/api/chat-by-access-token',
        accessToken: activeTeam.accessToken!,
        debug: false,
      })

      const res = await api.sendMessage(value, {
        onProgress: ({ text }) => {
          if (value === text) return
          updateMessageState(text)
          console.log('partialResponse.text:', text)
        },
      })

      await updateStreamingStatus(key, true)

      await addMessage(res.text, ChatCompletionResponseMessageRoleEnum.Assistant)

      return
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
        if (!done) {
          updateMessageState(text)
          return
        }

        console.log('done!!')

        await updateStreamingStatus(key, true)
        await addMessage(text, ChatCompletionResponseMessageRoleEnum.Assistant)
      },
      async onError(error) {
        console.log('error', error)
        await updateStreamingStatus(key, true)
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
