import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import { apiService, Refetcher } from '@own-chat/api-sdk'
import { getSetting, useSetting } from './useSetting'
import { useUser } from '../../../stores'
import { useAddSession } from './useAddSession'
import { useSessions } from './useSessions'
import { useUpdateSession } from './useUpdateSession'

export function useAddMessage() {
  const { user } = useUser()
  const { setting } = useSetting()
  const { addSession } = useAddSession()
  const { activeSession } = useSessions()
  const { updateSession } = useUpdateSession()

  async function addMessage(
    value: string,
    role: ChatCompletionResponseMessageRoleEnum,
    shouldCheckAddSession = false,
  ) {
    if (shouldCheckAddSession) {
      if (!setting.activeSessionId) {
        await addSession()
        await Refetcher.refetchSetting({ id: setting.id })
      }
    }

    if (activeSession && !activeSession.name) {
      await updateSession({
        where: { id: activeSession.id },
        data: { name: value.substring(0, 5) },
      })
    }

    const sessionId = getSetting().activeSessionId!

    await apiService.addMessage({
      userId: user.id,
      sessionId,
      role: role,
      content: value,
    })

    await Refetcher.refetchMessages({
      where: { sessionId },
    })
  }

  return { addMessage }
}
