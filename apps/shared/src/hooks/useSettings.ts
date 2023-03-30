import { useLocalStorage, getLocalStorage } from "stook-localstorage"

const key = "settings"

interface Settings {
  apiKey: string
  lang: string
  maxToken: string
  model: string
  showTokenCount: string
  theme: string
  temperature: number
  top_p: number
  frequencyPenalty: number
  presencePenalty: number
}

export function useSettings() {
  const [settings, setSettings] = useLocalStorage<Settings>(key, {
    apiKey: "",
    lang: "",
    maxToken: "",
    model: "",
    showTokenCount: "",
    theme: "",
    temperature: 0.5,
    top_p: 0.6,
    frequencyPenalty: 1,
    presencePenalty: 0
  })
  return { settings, setSettings }
}

export function getSettings(): string {
  return getLocalStorage(key)
}
