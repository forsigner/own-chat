import { apiService, Refetcher } from '@own-chat/api-sdk'
import { useUser } from '../../../stores'
import { useSetting } from './useSetting'

export function useRemoveSession() {
  const { user } = useUser()
  const { setting } = useSetting()

  async function removeSession(id: number) {
    await apiService.removeSession({
      id,
      teamId: setting.activeTeamId!,
    })

    const [newSetting] = await Promise.all([
      Refetcher.refetchSetting({ id: setting.id }),
      Refetcher.refetchSessions({
        where: {
          userId: user.id,
          teamId: setting.activeTeamId,
        },
      }),
    ])

    Refetcher.refetchMessages({
      where: { sessionId: newSetting.activeSessionId },
    })
  }

  return { removeSession }
}
