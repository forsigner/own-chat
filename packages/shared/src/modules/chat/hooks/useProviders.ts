import { Hooks } from '@own-chat/api-sdk'

export function useProviders() {
  const { data: providers = [], ...rest } = Hooks.useProviders()

  return {
    ...rest,
    providers,
  }
}
