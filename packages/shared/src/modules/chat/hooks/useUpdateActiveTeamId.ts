import { apiService, Mutator, Refetcher, SETTING } from '@own-chat/api-sdk'
import { useUser } from '../../../stores'
import { useSetting } from './useSetting'

export function useUpdateActiveTeamId() {
  const { setting } = useSetting()
  const { user } = useUser()

  async function updateActiveTeamId(activeTeamId: number) {
    Mutator.mutateSetting((setting) => {
      setting.activeTeamId = activeTeamId
    })

    await apiService.updateSetting({
      where: { id: setting.id },
      data: { activeTeamId },
    })

    await Refetcher.refetchSetting({ id: setting.id })

    const sessions = await Refetcher.refetchSessions({
      where: {
        userId: user.id,
        teamId: activeTeamId,
      },
    })

    if (sessions.length) {
      const [session] = sessions

      Mutator.mutateSetting((setting) => {
        setting.activeSessionId = session.id
      })

      await apiService.updateSetting({
        where: { id: setting.id },
        data: { activeSessionId: session.id },
      })

      await Refetcher.refetchMessages({
        where: { sessionId: session.id },
      })
    }
  }

  return { updateActiveTeamId }
}
