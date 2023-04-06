import { apiService, Refetcher } from '@own-chat/api-sdk'
import { useUser } from '../../../stores'
import { useSetting } from './useSetting'

export function useAddSession() {
  const { user } = useUser()
  const { setting } = useSetting()

  async function addSession() {
    const session = await apiService.addSession({
      teamId: setting.activeTeamId!,
      name: '',
    })

    await Promise.all([
      Refetcher.refetchSessions({
        where: {
          userId: user.id,
          teamId: setting.activeTeamId,
        },
      }),
      Refetcher.refetchSetting({ id: setting.id }),
    ])

    Refetcher.refetchMessages({
      where: { sessionId: session.id },
    })

    return session
  }

  return { addSession }
}
