import { apiService, Refetcher } from '@own-chat/api-sdk'
import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import { useUser } from '../../../stores'
import { useAddSession } from './useAddSession'
import { useSessions } from './useSessions'
import { useUpdateSession } from './useUpdateSession'
import { getVisit, useVisit } from './useVisit'

export function useAddMessage() {
  const { user } = useUser()
  const { visit } = useVisit()
  const { addSession } = useAddSession()
  const { activeSession } = useSessions()
  const { updateSession } = useUpdateSession()

  async function addMessage(
    value: string,
    role: ChatCompletionResponseMessageRoleEnum,
    shouldCheckAddSession = false,
  ) {
    if (shouldCheckAddSession) {
      if (!visit.activeSessionId) {
        await addSession()
        await Refetcher.refetchVisit()
      }
    }

    if (activeSession && !activeSession.name) {
      await updateSession({
        where: { id: activeSession.id },
        data: { name: value.substring(0, 5) },
      })
    }

    const sessionId = getVisit().activeSessionId!

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
