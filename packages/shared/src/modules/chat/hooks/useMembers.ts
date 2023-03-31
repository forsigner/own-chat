import { Hooks } from '@own-chat/api-sdk'
import { useSetting } from './useSetting'

export function useMembers() {
  const { setting } = useSetting()
  const { data: members = [], ...rest } = Hooks.useMembers(() => {
    if (!setting.activeProviderId) throw new Error()
    return {
      where: { providerId: setting.activeProviderId },
    }
  })

  return {
    ...rest,
    members,
  }
}
