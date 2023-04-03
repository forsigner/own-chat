import { Hooks } from '@own-chat/api-sdk'
import { useSetting } from './useSetting'

export function useMembers() {
  const { setting } = useSetting()
  const { data: members = [], ...rest } = Hooks.useMembers(() => {
    if (!setting.activeTeamId) throw new Error()
    return {
      where: { teamId: setting.activeTeamId },
    }
  })

  return {
    ...rest,
    members,
  }
}
