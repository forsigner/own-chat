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

export function useUpsertTeamForm() {
  const { hide, data } = useModal<Team>()
  const { user } = useUser()
  const { refetch } = useSetting()
  const isEdit = !!data

  const nodes: Node[] = [
    {
      label: 'Name',
      component: 'Input',
      name: 'name',
      value: data?.name || '',
      validators: {
        required: 'Name is required',
      },
    },

    {
      label: 'Type',
      component: 'Select',
      name: 'providerType',
      value: data?.providerType,
      options: [
        { label: 'Official', value: ProviderType.Official },
        { label: 'API Key', value: ProviderType.ApiKey },
        { label: 'Self host', value: ProviderType.SelfHost },
      ],
      componentProps: {
        placeholder: 'Please select a type',
      },
      validators: {
        required: 'Type is required',
      },

      onFieldInit({ value }) {
        form.setFieldState('apiKey', { visible: value === ProviderType.ApiKey })
        form.setFieldState('authorizationCode', { visible: value === ProviderType.SelfHost })
        form.setFieldState('endpoint', { visible: value === ProviderType.SelfHost })
      },

      onValueChange({ value }) {
        form.setFieldState('apiKey', { visible: value === ProviderType.ApiKey })
        form.setFieldState('authorizationCode', { visible: value === ProviderType.SelfHost })
        form.setFieldState('endpoint', { visible: value === ProviderType.SelfHost })
      },
    },

    {
      label: 'apiKey',
      component: 'Input',
      name: 'apiKey',
      value: data?.apiKey || '',
      visible: false,
    },

    {
      label: 'authorizationCode',
      component: 'Input',
      name: 'authorizationCode',
      value: data?.authorizationCode || '',
      visible: false,
    },

    {
      label: 'endpoint',
      component: 'Input',
      name: 'endpoint',
      value: data?.endpoint || '',
      visible: false,
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
