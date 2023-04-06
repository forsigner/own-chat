import { useSetting } from './useSetting'
import { apiService, Team, ProviderType, Refetcher } from '@own-chat/api-sdk'
import { useModal } from '@own-chat/easy-modal'
import { toast } from 'bone-ui'
import { Node, useForm } from 'fomir'

interface Values {
  name: string
  providerType: ProviderType
  accessToken?: string
  apiKey?: string
  authorizationCode?: string
  endpoint?: string
}

export function useUpdateTeamForm() {
  const { setting } = useSetting()
  const { hide } = useModal()

  const form = useForm<Values>({
    async onSubmit(values) {
      const toaster = toast.loading('Updating...', { showLayer: true })

      try {
        await apiService.updateTeam({
          where: { id: setting.activeTeamId },
          data: values,
        })

        await Refetcher.refetchMyTeams()
        toaster.update('Updated', { type: 'success' })
      } catch (error) {
        // console.log('error:', error)
        toaster.dismiss()
      }
    },

    onError(e) {
      console.log('e:', e)
    },
  })

  return form
}
