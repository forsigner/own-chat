import { useLocalStorage, getLocalStorage } from 'stook-localstorage'

const key = 'settings'

interface Settings {
  maxToken: number
  model: string
  showTokenCount: string
  followUpMessageLength: number
  temperature: number
  top_p: number
  frequencyPenalty: number
  presencePenalty: number
}

export function useSettings() {
  const [settings, setSettings] = useLocalStorage<Settings>(key, {
    maxToken: 2000,
    model: '',
    showTokenCount: '',
    followUpMessageLength: 3,
    temperature: 1,
    top_p: 1,
    frequencyPenalty: 0,
    presencePenalty: 0,
  })
  return { settings, setSettings }
}

export function getSettings(): string {
  return getLocalStorage(key)
}
