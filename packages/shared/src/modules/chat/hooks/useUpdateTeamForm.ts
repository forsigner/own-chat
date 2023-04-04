import { Node, useForm } from 'fomir'
import { toast } from 'bone-ui'
import { useModal } from '@own-chat/easy-modal'
import { apiService, Team, ProviderType, Refetcher } from '@own-chat/api-sdk'

interface Values {
  name: string
  providerType: ProviderType
  apiKey?: string
  authorizationCode?: string
  endpoint?: string
}

export function useUpdateTeamForm() {
  const { hide, data } = useModal<Team>()

  const form = useForm<Values>({
    async onSubmit(values) {
      const toaster = toast.loading('Submitting...', { showLayer: true })
      try {
        await apiService.updateTeam({
          where: { id: data.id },
          data: values,
        })

        await Refetcher.refetchMyTeams()
        toaster.update('Submitted', { type: 'success' })
        hide()
      } catch (error) {
        toaster.dismiss()
      }
    },
  })

  return form
}
