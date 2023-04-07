import { isApiError } from '../../../common'
import { useVisit } from './useVisit'
import { apiService, Refetcher, RoleType } from '@own-chat/api-sdk'
import { toast, usePopoverContext } from 'bone-ui'

export function useAddMember() {
  const { close } = usePopoverContext()
  const { visit } = useVisit()

  async function addMember(userId: number) {
    try {
      await apiService.addMember({
        teamId: visit.activeTeamId!,
        roleType: RoleType.Member,
        userId,
      })
      await Refetcher.refetchMembers({
        where: {
          teamId: visit.activeTeamId!,
        },
      })
      toast.success('添加成员成功')
      close()
    } catch (error) {
      if (isApiError(error)) {
        if (error.code === 'MemberExceed') {
          toast.info('Currently, We just support add 1 member')
        }
      }
    }
  }

  return { addMember }
}
