import { useLocalStorage, getLocalStorage, mutateLocalStorage } from 'stook-localstorage'

const key = 'Token'

export function useToken() {
  const [token, setToken] = useLocalStorage<string>(key)
  return { token, setToken }
}

export function getToken(): string {
  return getLocalStorage(key)
}

export function mutateToken(v: string | null) {
  mutateLocalStorage(key, v)
}
