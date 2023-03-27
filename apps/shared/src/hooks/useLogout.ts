import { request } from '@boter/request'
import { useRouter } from 'next/router'
import { useToken, useUser } from '../stores'

export function useLogout() {
  const { setUser } = useUser()
  const { setToken } = useToken()

  async function logout() {
    await request('/api/logout')
    setTimeout(() => {
      setUser(null as any)
      setToken(null as any)
    }, 0)
    // TODO:
    // location.href = '/'
  }

  return { logout }
}
