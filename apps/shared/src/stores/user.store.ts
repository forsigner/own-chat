import { PlanType, User } from '@one-chat/api-sdk'
import { useLocalStorage, getLocalStorage, mutateLocalStorage } from 'stook-localstorage'

const key = 'User'

export function useUser() {
  const [user, setUser] = useLocalStorage<User>('User')
  const { nickname = '' } = user || {}

  // const shortNickname = nickname.substring(0, 4) + '...' + nickname.substring(3, -1)
  const shortNickname = nickname
  return {
    user: {
      ...user,
      shortNickname,
      isGod() {
        return user?.planType === PlanType.God
      },
    },
    setUser,
  }
}

export function getUser(): User {
  return getLocalStorage(key)
}

export function mutateUser(v: any) {
  return mutateLocalStorage(key, v)
}
