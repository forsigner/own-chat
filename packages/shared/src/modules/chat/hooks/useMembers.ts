import { useVisit } from './useVisit'
import { Hooks } from '@own-chat/api-sdk'

export function useMembers() {
  const { visit } = useVisit()
  const { data: members = [], ...rest } = Hooks.useMembers(() => {
    if (!visit.activeTeamId) throw new Error()
    return {
      where: { teamId: visit.activeTeamId },
    }
  })

  return {
    ...rest,
    members,
  }
}
