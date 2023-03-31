import { toast } from 'bone-ui'
import { apiService } from '@own-chat/api-sdk'
import { useUser, useToken, LOGIN_SUCCESS_REDIRECT_URL } from '../../../../../../packages/shared/src'
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
    push(LOGIN_SUCCESS_REDIRECT_URL)
  }
  return { login }
}
