import { Hooks } from '@own-chat/api-sdk'
import { useUser } from '../../../stores'
import { useSetting } from './useSetting'

export function useSessions() {
  const { user } = useUser()
  const { setting } = useSetting()
  const { data: sessions, ...rest } = Hooks.useSessions({
    where: {
      userId: user.id,
      providerId: setting.activeProviderId,
    },
  })
  return { sessions, ...rest }
}
