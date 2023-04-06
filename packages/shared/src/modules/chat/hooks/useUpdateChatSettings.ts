import { apiService, Refetcher, UpdateChatSettingsInput } from '@own-chat/api-sdk'
import { toast } from 'bone-ui'
import { useDebouncedCallback } from 'use-debounce'

export function useUpdateChatSettings() {
  const debouncedUpdate = useDebouncedCallback(async (input: UpdateChatSettingsInput) => {
    const toaster = toast.loading('Saving...')
    try {
      await apiService.updateChatSettings({
        ...input,
        maxToken: Number(input.maxToken),
        followUpMessageLength: Number(input.followUpMessageLength),
      })
      await Refetcher.refetchChatSettings()
      toaster.update('Saved', { type: 'success' })
    } catch (error) {}
  }, 400)

  async function updateChatSettings(input: UpdateChatSettingsInput) {
    await debouncedUpdate(input)
  }

  return { updateChatSettings }
}
