import { apiService, Mutator, Refetcher } from '@own-chat/api-sdk'
import { useUser } from '../../../stores'
import { useVisit } from './useVisit'

export function useUpdateActiveTeamId() {
  const { visit } = useVisit()
  const { user } = useUser()

  async function updateActiveTeamId(activeTeamId: number) {
    Mutator.mutateVisit((visit) => {
      visit.activeTeamId = activeTeamId
    })

    await apiService.updateVisit({
      activeTeamId,
    })

    await Refetcher.refetchVisit()

    const sessions = await Refetcher.refetchSessions({
      where: {
        userId: user.id,
        teamId: activeTeamId,
      },
    })

    const [session] = sessions

    Mutator.mutateVisit((visit) => {
      visit.activeSessionId = session?.id || null
    })

    await apiService.updateVisit({
      activeSessionId: session?.id || null,
    })

    if (session) {
      await Refetcher.refetchMessages({
        where: { sessionId: session.id },
      })
    } else {
      Mutator.mutateMessages((messages) => {
        messages.splice(0, messages.length)
      })
    }
  }

  return { updateActiveTeamId }
}
