import { RoleType } from '@own-chat/api-sdk'
import { useMemo } from 'react'
import { useUser } from '../../../stores'
import { useProviders } from './useProviders'

export function useIsOwner() {
  const { user } = useUser()
  const { activeProvider, loading } = useProviders()

  const isOwner = useMemo(() => {
    if (!activeProvider) return false
    const member = activeProvider.members.find((i) => i.userId === user.id)
    return member?.roleType === RoleType.Owner
  }, [user, activeProvider])

  return { isOwner, loading }
}
