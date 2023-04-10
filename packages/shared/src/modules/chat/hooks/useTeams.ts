import { Hooks, Provider, ProviderType, Team } from '@own-chat/api-sdk'
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

  const isProviderValid = useMemo(() => {
    if (!activeProvider) return false
    if (activeProvider.type === ProviderType.ApiKey) {
      return !!activeProvider.apiKey
    }

    if (activeProvider.type === ProviderType.SelfHosted) {
      return !!(activeProvider.authorizationCode && activeProvider.endpoint)
    }
    return false
  }, [activeProvider])

  return {
    ...rest,
    teams,
    activeTeam,
    activeProvider,
    isProviderValid,
    loading: loading || rest.loading,
  }
}
