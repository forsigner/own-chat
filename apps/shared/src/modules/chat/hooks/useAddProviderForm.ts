import { Node, useForm } from 'fomir'
import { toast } from 'bone-ui'
import { useModal } from '@own-chat/easy-modal'
import { apiService, Provider, ProviderType, Refetcher } from '@own-chat/api-sdk'
import { useUser } from '../../../stores'

interface Values {
  name: string
  type: ProviderType
  apiKey?: string
  authorizationCode?: string
  endpoint?: string
}

export function useAddProviderForm() {
  const { hide, data = {} as Provider } = useModal<Provider>()
  const { user } = useUser()
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
      name: 'type',
      value: data?.type,
      options: [
        { label: 'API Key', value: ProviderType.ApiKey },
        { label: 'Self host', value: ProviderType.SelfHost },
      ],
      componentProps: {
        placeholder: 'Please select a type',
      },
      validators: {
        required: 'Type is required',
      },
    },

    {
      label: 'authorizationCode',
      component: 'Input',
      name: 'authorizationCode',
      value: data?.authorizationCode || '',
    },

    {
      label: 'endpoint',
      component: 'Input',
      name: 'endpoint',
      value: data?.endpoint || '',
    },
  ]

  const form = useForm<Values>({
    async onSubmit(values) {
      const toaster = toast.loading('Submitting...', { showLayer: true })
      try {
        if (isEdit) {
          await apiService.updateProvider({
            where: { id: data.id },
            data: values,
          })
        } else {
          await apiService.addProvider({
            ...values,
            userId: user.id,
          })
        }

        await Refetcher.refetchMyProviders()
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
