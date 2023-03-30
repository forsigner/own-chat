import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import { apiService, Refetcher } from '@own-chat/api-sdk'
import { useSetting } from './useSetting'
import { useUser } from '../../../stores'

export function useAddMessage() {
  const { user } = useUser()
  const { setting } = useSetting()

  async function addMessage(value: string, role?: ChatCompletionResponseMessageRoleEnum) {
    await apiService.addMessage({
      userId: user.id,
      sessionId: setting.activeSessionId!,
      role: role || ChatCompletionResponseMessageRoleEnum.User,
      content: value,
    })

    await Refetcher.refetchMessages({
      where: {
        sessionId: setting.activeSessionId,
      },
    })
  }

  return { addMessage }
}
