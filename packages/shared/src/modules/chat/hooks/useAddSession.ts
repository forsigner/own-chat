import { useUser } from '../../../stores'
import { useVisit } from './useVisit'
import { apiService, Refetcher } from '@own-chat/api-sdk'

export function useAddSession() {
  const { user } = useUser()
  const { visit } = useVisit()

  async function addSession() {
    const session = await apiService.addSession({
      teamId: visit.activeTeamId!,
      name: '',
    })

    await Promise.all([
      Refetcher.refetchSessions({
        where: {
          userId: user.id,
          teamId: visit.activeTeamId,
        },
      }),
      Refetcher.refetchVisit(),
    ])

    Refetcher.refetchMessages({
      where: { sessionId: session.id },
    })

    return session
  }

  return { addSession }
}
