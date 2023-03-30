import { apiService, Refetcher } from '@own-chat/api-sdk'

export function useAddSession() {
  async function addSession() {
    await apiService.addSession({
      providerId: 1,
      name: 'New chat',
    })
    Refetcher.refetchSessions()
  }

  return { addSession }
}
