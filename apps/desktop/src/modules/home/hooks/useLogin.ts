import { toast } from 'bone-ui'
import { apiService } from '@own-chat/api-sdk'
import { useUser, useToken } from '@own-chat/shared'
import { useRouter } from 'next/router'

export function useLogin() {
  const { setUser } = useUser()
  const { setToken } = useToken()
  const { push } = useRouter()
  async function login(token: string) {
    if (!token) return toast.warning('Please input your personal token')
    const payload = await apiService.loginByPersonalToken({ token })
    setToken(payload.token)
    setUser(payload.user)
    push('/dashboard/strategies-square')
  }
  return { login }
}
