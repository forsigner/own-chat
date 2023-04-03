import { apiService, Refetcher } from '@own-chat/api-sdk'
import { useUser } from '../../../stores'
import { useSetting } from './useSetting'

export function useAddSession() {
  const { user } = useUser()
  const { setting } = useSetting()

  async function addSession() {
    await apiService.addSession({
      teamId: setting.activeTeamId!,
      name: 'New chat',
    })

    await Refetcher.refetchSessions({
      where: {
        userId: user.id,
        teamId: setting.activeTeamId,
      },
    })
  }

  return { addSession }
}
