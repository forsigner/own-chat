import { Hooks } from '@own-chat/api-sdk'

export function useSessions() {
  const { data: sessions, ...rest } = Hooks.useSessions({})
  return { sessions, ...rest }
}
