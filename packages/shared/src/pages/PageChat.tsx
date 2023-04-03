import { LoginSuccessPayload } from '@own-chat/api-sdk'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ChatLayout } from '../layouts'
import { ModuleChat } from '../modules'
import { useToken, useUser } from '../stores'

interface Props {
  userId: number
  payload: LoginSuccessPayload
}

export function PageChat({ userId, payload }: Props) {
  const { query } = useRouter()
  const { user, setUser } = useUser()
  const { token, setToken } = useToken()

  useEffect(() => {
    if (!payload) return
    const { token, user } = payload

    if (query.from === 'third-party-login') {
      setToken(token)
      setUser(user)
    }
  }, [payload, query.from, setToken, setUser])

  if (!user || !token) return

  return <ModuleChat />
}

PageChat.Layout = ChatLayout
