import { CHAT_URL, DesktopHome, useToken } from '@own-chat/shared'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function PageHome() {
  const { token } = useToken()
  const { push } = useRouter()

  useEffect(() => {
    if (!token) return
    push(CHAT_URL)
  }, [token, push])

  return <DesktopHome />
}
