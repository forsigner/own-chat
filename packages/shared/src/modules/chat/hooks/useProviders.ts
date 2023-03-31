import { Hooks } from '@own-chat/api-sdk'
import { useMemo } from 'react'
import { useSetting } from './useSetting'

export function useProviders() {
  const { setting, loading } = useSetting()
  const { data: providers = [], ...rest } = Hooks.useMyProviders()

  const activeProvider = useMemo(() => {
    if (!providers || !setting?.activeProviderId) return
    return providers?.find((item) => item.id === setting.activeProviderId)!
  }, [providers, setting])

  return {
    ...rest,
    providers,
    activeProvider,
    loading: loading || rest.loading,
  }
}
