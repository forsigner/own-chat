import { Box } from '@fower/react'
import { ChatList } from '../../../components/MessageList/MessageList'
import { Anchor } from './Anchor'
import { CHAT_WIDTH } from '../../../common'
import { useMessages } from '../hooks/useMessages'

export const ChatBody = () => {
  const { messages = [], loading } = useMessages()

  return (
    <Box flex-1 column overflowAuto px4 pt5 pb0>
      <Box maxW={CHAT_WIDTH} mx-auto w={['100p']}>
        <Box>{!loading && <ChatList messages={messages} />}</Box>
        <Anchor />
      </Box>
    </Box>
  )
}
