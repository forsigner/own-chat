import { useUser } from '../../../stores'
import { useVisit } from './useVisit'
import { Hooks } from '@own-chat/api-sdk'
import { useMemo } from 'react'

export function useSessions() {
  const { user } = useUser()
  const { visit } = useVisit()

  const { data: sessions, ...rest } = Hooks.useSessions({
    where: {
      userId: user.id,
      teamId: visit.activeTeamId,
    },
  })

  const activeSession = useMemo(() => {
    if (!sessions || !visit?.activeSessionId) return
    return sessions?.find((item) => item.id === visit.activeSessionId)
  }, [sessions, visit])

  return {
    ...rest,
    sessions,
    activeSession,
  }
}
