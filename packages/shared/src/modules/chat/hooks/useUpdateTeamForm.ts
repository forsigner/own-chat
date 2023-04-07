import { apiService, Team, ProviderType, Refetcher } from '@own-chat/api-sdk'
import { toast } from 'bone-ui'
import { useForm } from 'fomir'
import { useVisit } from './useVisit'

interface Values {
  name: string
  providerType: ProviderType
  accessToken?: string
  apiKey?: string
  authorizationCode?: string
  endpoint?: string
}

export function useUpdateTeamForm() {
  const { visit } = useVisit()

  const form = useForm<Values>({
    async onSubmit(values) {
      const toaster = toast.loading('Updating...', { showLayer: true })

      try {
        await apiService.updateTeam({
          where: { id: visit.activeTeamId },
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
