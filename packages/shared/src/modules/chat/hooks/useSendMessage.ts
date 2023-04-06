import { ChatGPTUnofficialProxyAPI } from '../../../chatgpt-api'
import { getStreamingKey } from '../../../common'
import { fetchChatStream, updateStreamingStatus } from '../../../common/request'
import { useToken, useUser } from '../../../stores'
import { useAddMessage } from './useAddMessage'
import { useChatSettings } from './useChatSettings'
import { useMessages } from './useMessages'
import { useSetting } from './useSetting'
import { useTeams } from './useTeams'
import { Message, Mutator, ProviderType } from '@own-chat/api-sdk'
import { ChatCompletionResponseMessageRoleEnum, ChatCompletionRequestMessage } from 'openai'

export function useSendMessage() {
  const { token } = useToken()
  const { user } = useUser()
  const { setting } = useSetting()
  const { addMessage } = useAddMessage()
  const { activeTeam } = useTeams()
  const { messages = [] } = useMessages()
  const { chatSettings } = useChatSettings()

  function initAnswer() {
    const newMessage = {
      userId: user.id,
      sessionId: setting.activeSessionId!,
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

    console.log(
      'len:',
      len,
      'msg.len:',
      messages.length,
      'followUpMessageLength:',
      followUpMessageLength,
    )

    if (requestMessages.length <= followUpMessageLength) {
      return requestMessages
    }

    return requestMessages.slice(len - followUpMessageLength, len)
  }

  async function sendChatRequest(value: string) {
    let host: string = ''

    const requestMessages = getRequestMessages(value, messages)

    console.log('requestMessages:', requestMessages)

    if (process.env.NEXT_PUBLIC_PLATFORM === 'DESKTOP') {
      host = 'https://www.ownchat.me'
      // host = !isProd ? 'http://localhost:4000' : 'https://www.ownchat.me'
    }

    const key = getStreamingKey(activeTeam!)

    if (activeTeam?.providerType === ProviderType.AccessToken) {
      const api = new ChatGPTUnofficialProxyAPI({
        apiReverseProxyUrl: '/api/chat-by-access-token',
        accessToken: activeTeam.accessToken!,
        debug: false,
      })

      try {
        const res = await api.sendMessage(value, {
          onProgress: ({ text }) => {
            if (value === text) return
            updateMessageState(text)
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

    await fetchChatStream({
      params: {
        temperature: 1,
        presence_penalty: 0,
        stream: true,
        model: chatSettings.model!,
        messages: requestMessages,
        max_tokens: chatSettings.maxToken!,
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
      await addMessage(value, ChatCompletionResponseMessageRoleEnum.User, true)

      // init an empty answer message
      initAnswer()

      await sendChatRequest(value)
    } catch (error) {
      console.log('error:', error)
    }
  }

  return { sendMessage }
}
