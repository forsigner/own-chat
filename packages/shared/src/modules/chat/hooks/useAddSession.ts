import { apiService, Refetcher } from '@own-chat/api-sdk'
import { useUser } from '../../../stores'
import { useSetting } from './useSetting'

export function useAddSession() {
  const { user } = useUser()
  const { setting } = useSetting()

  async function addSession() {
    await apiService.addSession({
      providerId: setting.activeProviderId!,
      name: 'New chat',
    })

    await Refetcher.refetchSessions({
      where: {
        userId: user.id,
        providerId: setting.activeProviderId,
      },
    })
  }

  return { addSession }
}
