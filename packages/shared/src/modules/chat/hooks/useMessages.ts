import { useSetting } from './useSetting'
import { Hooks, MESSAGES, Message } from '@own-chat/api-sdk'
import { getState } from 'stook'

export type StreamingMessage = Message & { streaming: boolean }
export function useMessages() {
  const { setting } = useSetting()

  const { data: messages = [], ...rest } = Hooks.useMessages(() => {
    if (!setting.activeSessionId) throw new Error('')
    return {
      where: {
        sessionId: setting.activeSessionId,
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
