import { Hooks, Provider, Team } from '@own-chat/api-sdk'
import { useMemo } from 'react'
import { useVisit } from './useVisit'

export function useTeams() {
  const { visit, loading } = useVisit()
  const { data: teams = [], ...rest } = Hooks.useMyTeams()

  const activeTeam: Team = useMemo(() => {
    if (!teams || !visit?.activeTeamId) return {} as Team
    return teams?.find((item) => item.id === visit.activeTeamId)!
  }, [teams, visit])

  const activeProvider: Provider = useMemo(() => {
    if (!activeTeam) return {} as Provider
    return activeTeam.providers?.find((item) => item.id === activeTeam.activeProviderId)!
  }, [activeTeam])

  return {
    ...rest,
    teams,
    activeTeam,
    activeProvider,
    loading: loading || rest.loading,
  }
}
