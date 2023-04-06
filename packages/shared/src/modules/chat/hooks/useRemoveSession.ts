import { apiService, Mutator, Refetcher } from '@own-chat/api-sdk'
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

    if (newSetting.activeSessionId) {
      await Refetcher.refetchMessages({
        where: { sessionId: newSetting.activeSessionId },
      })
    } else {
      Mutator.mutateMessages((messages) => {
        messages.splice(0, messages.length)
      })
    }
  }

  return { removeSession }
}
