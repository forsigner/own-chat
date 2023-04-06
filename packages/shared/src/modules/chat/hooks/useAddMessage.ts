import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import { apiService, Refetcher } from '@own-chat/api-sdk'
import { useSetting } from './useSetting'
import { useUser } from '../../../stores'
import { useAddSession } from './useAddSession'

export function useAddMessage() {
  const { user } = useUser()
  const { setting } = useSetting()
  const { addSession } = useAddSession()

  async function addMessage(value: string, role?: ChatCompletionResponseMessageRoleEnum) {
    let sessionId = setting.activeSessionId

    if (!sessionId) {
      const newSession = await addSession()
      sessionId = newSession.id
    }

    await apiService.addMessage({
      userId: user.id,
      sessionId,
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
