import { Box } from '@fower/react'
import { ChatList } from './ChatList'
import { Anchor } from './Anchor'

export const ChatBody = () => {
  return (
    <Box flex-1 column overflowAuto px6 pt5 pb0>
      <ChatList />
      <Anchor />
    </Box>
  )
}
