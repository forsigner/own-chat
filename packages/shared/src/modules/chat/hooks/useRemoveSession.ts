import { apiService, Refetcher, UpdateSessionInput } from '@own-chat/api-sdk'
import { useUser } from '../../../stores'
import { useSetting } from './useSetting'

export function useRemoveSession() {
  const { user } = useUser()
  const { setting } = useSetting()

  async function removeSession(id: number) {
    await apiService.removeSession({ id })

    await Refetcher.refetchSessions({
      where: {
        userId: user.id,
        teamId: setting.activeTeamId,
      },
    })

    await Refetcher.refetchMessages({
      where: {
        sessionId: id,
      },
    })
  }

  return { removeSession }
}
