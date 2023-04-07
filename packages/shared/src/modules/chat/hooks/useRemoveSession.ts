import { useUser } from '../../../stores'
import { useVisit } from './useVisit'
import { apiService, Mutator, Refetcher } from '@own-chat/api-sdk'

export function useRemoveSession() {
  const { user } = useUser()
  const { visit } = useVisit()

  async function removeSession(id: number) {
    await apiService.removeSession({
      id,
      teamId: visit.activeTeamId!,
    })

    const [newSetting] = await Promise.all([
      Refetcher.refetchVisit(),
      Refetcher.refetchSessions({
        where: {
          userId: user.id,
          teamId: visit.activeTeamId,
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
