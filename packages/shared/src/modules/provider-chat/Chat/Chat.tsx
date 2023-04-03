import { Box } from '@fower/react'
import { ChatBody } from './ChatBody'
import { ChatFooter } from './ChatFooter'
import { ChatHeader } from './ChatHeader'

export const Chat = () => {
  return (
    <Box column h-100p>
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </Box>
  )
}
