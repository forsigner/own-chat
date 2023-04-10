import { apiService, Refetcher, UpdateProviderDataInput } from '@own-chat/api-sdk'
import { toast } from 'bone-ui'

export function useUpdateProvider() {
  async function updateProvider(id: number, data: UpdateProviderDataInput) {
    const toaster = toast.loading('Saving...')
    try {
      await apiService.updateProvider({
        where: { id },
        data,
      })

      await Refetcher.refetchMyTeams()
      toaster.update('Saved', { type: 'success' })
    } catch (error) {}
  }

  return { updateProvider }
}
