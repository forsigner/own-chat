import { User } from '@own-chat/api-sdk'
import { useLocalStorage, getLocalStorage, mutateLocalStorage } from 'stook-localstorage'

const key = 'User'

export function useUser() {
  const [user, setUser] = useLocalStorage<User>('User')
  return {
    user,
    setUser,
  }
}

export function getUser(): User {
  return getLocalStorage(key)
}

export function mutateUser(v: any) {
  return mutateLocalStorage(key, v)
}
