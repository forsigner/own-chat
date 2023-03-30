import { apiService, Mutator, Refetcher, SETTING } from '@own-chat/api-sdk'
import { useUser } from '../../../stores'
import { useSetting } from './useSetting'

export function useUpdateActiveProviderId() {
  const { setting } = useSetting()
  const { user } = useUser()

  async function updateActiveProviderId(activeProviderId: number) {
    Mutator.mutateSetting((setting) => {
      setting.activeProviderId = activeProviderId
    })

    await apiService.updateSetting({
      where: { id: setting.id },
      data: { activeProviderId },
    })

    await Refetcher.refetchSetting({ id: setting.id })

    const sessions = await Refetcher.refetchSessions({
      where: {
        userId: user.id,
        providerId: activeProviderId,
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

  return { updateActiveProviderId }
}
