import { Box } from '@fower/react'
import { ChatList } from './ChatList'
import { Anchor } from './Anchor'
import { CHAT_WIDTH } from '../../../common'

export const ChatBody = () => {
  return (
    <Box flex-1 column overflowAuto px4 pt5 pb0>
      <Box maxW={CHAT_WIDTH} mx-auto>
        <ChatList />
        <Anchor />
      </Box>
    </Box>
  )
}
