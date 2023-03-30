import { apiService, Refetcher, UpdateSessionInput } from '@own-chat/api-sdk'
import { useUser } from '../../../stores'
import { useSetting } from './useSetting'

export function useUpdateSession() {
  const { user } = useUser()
  const { setting } = useSetting()

  async function updateSession(input: UpdateSessionInput) {
    await apiService.updateSession(input)

    await Refetcher.refetchSessions({
      where: {
        userId: user.id,
        providerId: setting.activeProviderId,
      },
    })
  }

  return { updateSession }
}
