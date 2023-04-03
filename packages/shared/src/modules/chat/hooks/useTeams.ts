import { Hooks } from '@own-chat/api-sdk'
import { useMemo } from 'react'
import { useSetting } from './useSetting'

export function useTeams() {
  const { setting, loading } = useSetting()
  const { data: teams = [], ...rest } = Hooks.useMyTeams()

  const activeTeam = useMemo(() => {
    if (!teams || !setting?.activeTeamId) return
    return teams?.find((item) => item.id === setting.activeTeamId)!
  }, [teams, setting])

  return {
    ...rest,
    teams,
    activeTeam,
    loading: loading || rest.loading,
  }
}
