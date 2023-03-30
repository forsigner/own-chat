import { Node, useForm } from 'fomir'
import { toast } from 'bone-ui'
import { useModal } from '@own-chat/easy-modal'
import { apiService, ProviderType, Refetcher } from '@own-chat/api-sdk'

interface Values {
  name: string
  type: ProviderType
  apiKey?: string
  authorizationCode?: string
  endpoint?: string
}

export function useAddProviderForm() {
  const { hide } = useModal()

  const nodes: Node[] = [
    {
      label: 'Name',
      component: 'Input',
      name: 'name',
      value: '',
      validators: {
        required: 'Name is required',
      },
    },

    {
      label: 'Type',
      component: 'Select',
      name: 'type',
      value: '',
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
      value: '',
    },

    {
      label: 'endpoint',
      component: 'Input',
      name: 'endpoint',
      value: '',
    },
  ]

  const form = useForm<Values>({
    async onSubmit(values) {
      const toaster = toast.loading('Submitting...', { showLayer: true })
      try {
        await apiService.addProvider(values)
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
