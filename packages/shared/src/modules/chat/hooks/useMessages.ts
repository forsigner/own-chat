import { Hooks, Message } from '@own-chat/api-sdk'
import { useSetting } from './useSetting'

export type StreamingMessage = Message & { streaming: boolean }
export function useMessages() {
  const { setting } = useSetting()

  const { data: messages = [], ...rest } = Hooks.useMessages({
    where: {
      sessionId: setting.activeSessionId,
    },
  })

  return {
    ...rest,
    messages,
  }
}
