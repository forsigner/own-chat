import { apiService, Refetcher, RoleType } from '@own-chat/api-sdk'
import { useSetting } from './useSetting'
import { useModal } from '@own-chat/easy-modal'
import { toast } from 'bone-ui'

export function useAddMember() {
  const { setting } = useSetting()
  const { hide } = useModal()

  async function addMember(userId: number) {
    await apiService.addMember({
      providerId: setting.activeProviderId!,
      roleType: RoleType.Member,
      userId,
    })
    await Refetcher.refetchMembers({
      where: {
        providerId: setting.activeProviderId!,
      },
    })
    toast.success('添加成员成功')
    hide()
  }

  return { addMember }
}
