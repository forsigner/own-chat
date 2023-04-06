import { Hooks } from '@own-chat/api-sdk'

export function useChatSettings() {
  const result = Hooks.useChatSettings()
  return {
    ...result,
    chatSettings: result.data,
  }
}
