import { Node, useForm } from 'fomir'
import { toast } from 'bone-ui'
import { useModal } from '@own-chat/easy-modal'
import { apiService, Team, ProviderType, Refetcher } from '@own-chat/api-sdk'
import { useUser } from '../../../stores'
import { useSetting } from './useSetting'

interface Values {
  name: string
  providerType: ProviderType
  apiKey?: string
  authorizationCode?: string
  endpoint?: string
}

export function useAddTeamForm() {
  const { hide, data } = useModal<Team>()
  const { user } = useUser()
  const { refetch } = useSetting()
  const isEdit = !!data

  const nodes: Node[] = [
    {
      component: 'Input',
      name: 'name',
      value: data?.name || '',
      componentProps: {
        size: 'lg',
        textCenter: true,
        placeholder: 'Please name your team',
      },
      validators: {
        required: 'Name is required',
      },
    },
  ]

  const form = useForm<Values>({
    async onSubmit(values) {
      const toaster = toast.loading('Submitting...', { showLayer: true })
      try {
        if (isEdit) {
          await apiService.updateTeam({
            where: { id: data.id },
            data: values,
          })
        } else {
          await apiService.addTeam({
            ...values,
            userId: user.id,
          })

          await refetch()
        }

        await Refetcher.refetchMyTeams()
        toaster.update('Submitted', { type: 'success' })
        hide()
      } catch (error) {
        toaster.dismiss()
      }
    },
    children: nodes,
  })

  return form
}
