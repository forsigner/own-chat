import { Box } from '@fower/react'
import { useTeams } from '../hooks/useTeams'
import { ChatBody } from './ChatBody'
import { ChatFooter } from './ChatFooter'
import { ChatHeader } from './ChatHeader'

export const Chat = () => {
  const { loading } = useTeams()

  if (loading) return null

  return (
    <Box column h-100p>
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </Box>
  )
}
