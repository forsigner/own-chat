import { useMemo } from 'react'
import { Hooks } from '@own-chat/api-sdk'
import { useUser } from '../../../stores'
import { useSetting } from './useSetting'

export function useMessages() {
  const { setting } = useSetting()
  const { data: messages, ...rest } = Hooks.useMessages({
    where: {
      sessionId: setting.activeSessionId,
    },
  })

  return {
    ...rest,
    messages,
  }
}
