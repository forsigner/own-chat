import { ChatCompletionResponseMessage } from 'openai'
import { ChatParams } from '../../../common/request'
import { useChatSettings } from './useChatSettings'

export function useGetChatParams() {
  const { chatSettings } = useChatSettings()

  function getChatParams(messages: ChatCompletionResponseMessage[]): ChatParams {
    return {
      temperature: 1,
      presence_penalty: 0,
      stream: true,
      model: chatSettings.model!,
      messages,
      max_tokens: chatSettings.maxToken!,
    }
  }

  return { getChatParams }
}
