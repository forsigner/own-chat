import { apiService, Refetcher } from '@own-chat/api-sdk'
import { useSetting } from './useSetting'
import { toast } from 'bone-ui'

export function useRemoveMember() {
  const { setting } = useSetting()

  async function removeMember(id: number) {
    await apiService.removeMember({ id })
    await Refetcher.refetchMembers({
      where: {
        teamId: setting.activeTeamId!,
      },
    })
    toast.success('移除成员成功')
  }

  return { removeMember }
}
