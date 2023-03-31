import { Hooks } from '@own-chat/api-sdk'
import { useSetting } from './useSetting'

export function useCollaborators() {
  const { setting } = useSetting()
  const { data: collaborators = [], ...rest } = Hooks.useCollaborators(() => {
    if (!setting.activeProviderId) new Error()
    return {
      where: { providerId: setting.activeProviderId! },
    }
  })

  return {
    ...rest,
    collaborators,
  }
}
