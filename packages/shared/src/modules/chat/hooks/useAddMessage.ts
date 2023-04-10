import { apiService, Refetcher } from '@own-chat/api-sdk'
import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import { useUser } from '../../../stores'
import { useAddSession } from './useAddSession'
import { useSessions } from './useSessions'
import { useUpdateSession } from './useUpdateSession'
import { getVisit, useVisit } from './useVisit'
import { getMessages } from './useMessages'

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

    const messages = getMessages()

    await apiService.addMessage({
      userId: user.id,
      userMessageId:
        role === ChatCompletionResponseMessageRoleEnum.Assistant
          ? messages[messages.length - 2].id
          : null,
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
