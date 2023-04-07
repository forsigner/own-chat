import { useTranslation } from 'react-i18next'
import { isApiError } from '../../../common'
import { useVisit } from './useVisit'
import { apiService, Refetcher, RoleType } from '@own-chat/api-sdk'
import { toast, usePopoverContext } from 'bone-ui'

export function useAddMember() {
  const { t } = useTranslation('common')
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
      toast.success(t('add-member-success'))
      close()
    } catch (error) {
      if (isApiError(error)) {
        if (error.code === 'MemberExceed') {
          toast.info(t('add-member-limit'))
        }
      }
    }
  }

  return { addMember }
}
