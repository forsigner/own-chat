import { apiService, Refetcher, RoleType } from '@own-chat/api-sdk'
import { toast, usePopoverContext } from 'bone-ui'
import { useSetting } from './useSetting'
import { isApiError } from '../../../common'

export function useAddMember() {
  const { close } = usePopoverContext()
  const { setting } = useSetting()

  async function addMember(userId: number) {
    try {
      await apiService.addMember({
        teamId: setting.activeTeamId!,
        roleType: RoleType.Member,
        userId,
      })
      await Refetcher.refetchMembers({
        where: {
          teamId: setting.activeTeamId!,
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
