import { Hooks } from '@own-chat/api-sdk'

export function useTeam() {
  const { data: team, ...rest } = Hooks.useActiveTeam()

  return {
    ...rest,
    team,
  }
}
