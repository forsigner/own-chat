import { Box } from '@fower/react'
import { Anchor } from './Anchor'
import { useMessages, useSessions } from '../../../hooks'
import { CHAT_WIDTH } from '../../../common'
import { ChatList } from '../../MessageList/MessageList'

export const ChatBody = () => {
  const { loading: loadingSession } = useSessions()
  const { messages = [], loading } = useMessages()

  return (
    <Box flex-1 column overflowAuto px4 pt5 pb0>
      <Box maxW={CHAT_WIDTH} mx-auto w={['100p']}>
        <Box>{!loading && !loadingSession && <ChatList messages={messages as any} />}</Box>
        <Anchor />
      </Box>
    </Box>
  )
}
