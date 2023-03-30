import { useMemo } from 'react'
import { Hooks } from '@own-chat/api-sdk'
import { useUser } from '../../../stores'
import { useSetting } from './useSetting'

export function useSessions() {
  const { user } = useUser()
  const { setting } = useSetting()
  const { data: sessions, ...rest } = Hooks.useSessions({
    where: {
      userId: user.id,
      providerId: setting.activeProviderId,
    },
  })

  const activeSession = useMemo(() => {
    if (!sessions || !setting?.activeSessionId) return
    return sessions?.find((item) => item.id === setting.activeSessionId)
  }, [sessions, setting])

  return {
    ...rest,
    sessions,
    activeSession,
  }
}
