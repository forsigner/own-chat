import { RoleType } from '@own-chat/api-sdk'
import { useMemo } from 'react'
import { useUser } from '../../../stores'
import { useTeams } from './useTeams'

export function useIsOwner() {
  const { user } = useUser()
  const { activeTeam, loading } = useTeams()

  const isOwner = useMemo(() => {
    if (!activeTeam) return false
    const member = activeTeam.members.find((i) => i.userId === user.id)
    return member?.roleType === RoleType.Owner
  }, [user, activeTeam])

  return { isOwner, loading }
}
