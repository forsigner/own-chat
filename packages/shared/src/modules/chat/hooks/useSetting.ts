import { apiService, Hooks, Mutator, Refetcher, SETTING } from '@own-chat/api-sdk'
import { useUser } from '../../../stores'

export function useSetting() {
  const { user } = useUser()
  const { data: setting, ...res } = Hooks.useSetting({ userId: user?.id })

  return {
    setting,
    ...res,
  }
}

export async function updateActiveTeamId(settingId: number, activeTeamId: number) {
  // TODO: why don't run ?
  Mutator.mutateSetting((setting) => {
    console.log('update setting...')
    setting.activeTeamId = activeTeamId
  })

  await apiService.updateSetting({
    where: { id: settingId },
    data: { activeTeamId },
  })

  await Refetcher.refetchSetting({ id: settingId })
}

export async function updateActiveSessionId(settingId: number, activeSessionId: number) {
  await apiService.updateSetting({
    where: { id: settingId },
    data: { activeSessionId },
  })

  await Refetcher.refetchSetting({ id: settingId })
}
