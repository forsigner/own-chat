import { Node, useForm } from 'fomir'
import { toast } from 'bone-ui'
import { useModal } from '@own-chat/easy-modal'
import { apiService, Team, ProviderType, Refetcher } from '@own-chat/api-sdk'
import { useSetting } from './useSetting'

interface Values {
  name: string
  providerType: ProviderType
  apiKey?: string
  authorizationCode?: string
  endpoint?: string
}

export function useUpdateTeamForm() {
  const { setting } = useSetting()
  const { hide } = useModal()

  const form = useForm<Values>({
    async onSubmit(values) {
      const toaster = toast.loading('Submitting...', { showLayer: true })

      try {
        await apiService.updateTeam({
          where: { id: setting.activeTeamId },
          data: values,
        })

        await Refetcher.refetchMyTeams()
        toaster.update('Submitted', { type: 'success' })
        hide()
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
