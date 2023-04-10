import { useDebouncedCallback } from 'use-debounce'
import {
  apiService,
  ProviderType,
  Refetcher,
  Provider,
  UpdateProviderDataInput,
} from '@own-chat/api-sdk'
import { toast } from 'bone-ui'
import { Node, useForm } from 'fomir'
import { useVisit } from './useVisit'
import { useTeams } from './useTeams'
import { useUpdateProvider } from './useUpdateProvider'

interface Values {
  name: string
  providerType: ProviderType
  accessToken?: string
  apiKey?: string
  authorizationCode?: string
  endpoint?: string
}

export function useUpdateProviderForm(provider: Provider) {
  const { visit } = useVisit()
  const { activeProvider } = useTeams()
  const { updateProvider } = useUpdateProvider()

  let nodes: Node[] = []

  if (provider?.type === ProviderType.ApiKey) {
    nodes = [
      ...nodes,
      {
        label: 'OpenAI API Key',
        component: 'Input',
        name: 'apiKey',
        value: activeProvider?.apiKey || '',
        componentProps: {
          size: 'sm',
          placeholder: 'sk-...',
        },
      },
    ]
  }

  if (provider?.type === ProviderType.SelfHosted) {
    nodes = [
      ...nodes,
      {
        label: 'Self-Hosted Server',
        component: 'Input',
        name: 'endpoint',
        value: activeProvider?.endpoint,
        componentProps: {
          placeholder: 'eg: https://own-chat-official-provider.vercel.app',
          autoComplete: 'new-password',
          size: 'sm',
        },
        validators: {
          required: 'Please input Self-Hosted Server',
        },
      },
      {
        label: 'Authorization Code',
        component: 'PasswordInput',
        name: 'authorizationCode',
        componentProps: {
          autoComplete: 'new-password',
          size: 'sm',
          // autoComplete: 'off',
        },
        value: activeProvider?.authorizationCode || '',
      },
    ]
  }

  if (provider?.type === ProviderType.AccessToken) {
    nodes = [
      ...nodes,
      {
        label: 'Access Token',
        component: 'Input',
        name: 'accessToken',
        componentProps: {
          autoComplete: 'new-password',
        },
        value: activeProvider?.accessToken || '',
      },
    ]
  }

  const debouncedUpdate = useDebouncedCallback(async (data: UpdateProviderDataInput) => {
    updateProvider(provider.id, data)
  }, 400)

  const form = useForm<Values>({
    watch: {
      '*.value': async (values: any) => {
        await debouncedUpdate(values)
        console.log('values---:', values)
      },
    },

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
    children: nodes,
  })

  return form
}
