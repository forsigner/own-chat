import { useVisit } from './useVisit'
import { apiService, Refetcher } from '@own-chat/api-sdk'
import { toast } from 'bone-ui'

export function useRemoveMember() {
  const { visit } = useVisit()

  async function removeMember(id: number) {
    await apiService.removeMember({ id })
    await Refetcher.refetchMembers({
      where: {
        teamId: visit.activeTeamId!,
      },
    })
    toast.success('移除成员成功')
  }

  return { removeMember }
}
