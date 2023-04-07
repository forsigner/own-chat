import { apiService, Mutator, Refetcher, UpdateSessionInput } from '@own-chat/api-sdk'
import { useUser } from '../../../stores'
import { useVisit } from './useVisit'

export function useUpdateSession() {
  const { user } = useUser()
  const { visit } = useVisit()

  async function updateSession(input: UpdateSessionInput) {
    Mutator.mutateSessions((sessions) => {
      //
    })
    await apiService.updateSession(input)

    await Refetcher.refetchSessions({
      where: {
        userId: user.id,
        teamId: visit.activeTeamId,
      },
    })
  }

  return { updateSession }
}
