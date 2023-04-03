import { Box } from '@fower/react'
import { Session } from '@own-chat/api-sdk'
import { ChatList } from '../../components/MessageList/MessageList'
import { Logo } from '../../components'
import { ApiError } from '../../common'

interface Props {
  session: Session
  error: ApiError
}

export function SessionDetail({ session, error }: Props) {
  return (
    <Box column pb-100 maxW-720 mx-auto px5>
      <Box toBetween pt4 mb8>
        <Logo to="/" />
      </Box>

      {error && (
        <Box toCenter minH-50vh>
          <Box gray400>您没有该对话的查看权限</Box>
        </Box>
      )}

      {session && <ChatList messages={session?.messages || []} />}
    </Box>
  )
}
