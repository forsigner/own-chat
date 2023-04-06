import { Hooks, Message } from '@own-chat/api-sdk'
import { useSetting } from './useSetting'

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
