import { Box } from '@fower/react'
import { Hooks, LoginSuccessPayload } from '@own-chat/api-sdk'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useToken, useUser } from '../stores'

interface Props {
  userId: number
  payload: LoginSuccessPayload
}

export function PageChat({ userId, payload }: Props) {
  const { query } = useRouter()
  const { setUser } = useUser()
  const { setToken } = useToken()

  useEffect(() => {
    if (!payload) return
    const { token, user } = payload
    if (query.from === 'third-party-login') {
      setToken(token)
      setUser(user)
    }
  }, [payload, query.from, setToken, setUser])

  return <Box>wip...</Box>
}
