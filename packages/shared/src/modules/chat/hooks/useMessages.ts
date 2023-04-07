import { useVisit } from './useVisit'
import { Hooks, MESSAGES, Message } from '@own-chat/api-sdk'
import { getState } from 'stook'

export function useMessages() {
  const { visit } = useVisit()

  const { data: messages = [], ...rest } = Hooks.useMessages(() => {
    if (!visit.activeSessionId) throw new Error('')
    return {
      where: {
        sessionId: visit.activeSessionId,
      },
    }
  })

  return {
    ...rest,
    messages,
  }
}

export function getMessages(): Message[] {
  return getState(MESSAGES)?.data || []
}
