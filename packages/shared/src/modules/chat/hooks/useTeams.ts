import { Hooks } from '@own-chat/api-sdk'
import { useMemo } from 'react'
import { useVisit } from './useVisit'

export function useTeams() {
  const { visit, loading } = useVisit()
  const { data: teams = [], ...rest } = Hooks.useMyTeams()

  const activeTeam = useMemo(() => {
    if (!teams || !visit?.activeTeamId) return
    return teams?.find((item) => item.id === visit.activeTeamId)!
  }, [teams, visit])

  return {
    ...rest,
    teams,
    activeTeam,
    loading: loading || rest.loading,
  }
}
