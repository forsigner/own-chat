import { apiService, Refetcher, RoleType } from '@own-chat/api-sdk'
import { useSetting } from './useSetting'
import { useModal } from '@own-chat/easy-modal'
import { toast } from 'bone-ui'

export function useRemoveMember() {
  const { setting } = useSetting()
  const { hide } = useModal()

  async function removeMember(id: number) {
    await apiService.removeMember({ id })
    await Refetcher.refetchMembers({
      where: {
        providerId: setting.activeProviderId!,
      },
    })
    toast.success('移除成员成功')
    hide()
  }

  return { removeMember }
}
