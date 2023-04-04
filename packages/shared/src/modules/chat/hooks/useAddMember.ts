import { apiService, Refetcher, RoleType } from '@own-chat/api-sdk'
import { useSetting } from './useSetting'
import { toast, usePopoverContext } from 'bone-ui'

export function useAddMember() {
  const { close } = usePopoverContext()
  const { setting } = useSetting()

  async function addMember(userId: number) {
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
  }

  return { addMember }
}
