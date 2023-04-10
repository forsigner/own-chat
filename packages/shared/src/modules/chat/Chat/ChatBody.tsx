import { Box } from '@fower/react'
import { CHAT_WIDTH } from '../../../common'
import { MessageList } from '../../../components/MessageList/MessageList'
import { useMessages } from '../hooks/useMessages'
import { useVisit } from '../hooks/useVisit'
import { Anchor } from './Anchor'
import { ChatWelcome } from './ChatWelcome'

export const ChatBody = () => {
  const { visit } = useVisit()
  const { messages = [], loading } = useMessages()

  return (
    <Box flex-1 column overflowAuto px4 pt5 pb0>
      <Box maxW={CHAT_WIDTH} mx-auto w={['100p']}>
        {visit.activeSessionId && (
          <Box>
            {!loading && (
              <>
                {!!messages.length && <MessageList messages={messages} />}
                {!messages.length && <ChatWelcome />}
              </>
            )}
          </Box>
        )}
        {!visit.activeSessionId && (
          <Box>
            <ChatWelcome />
          </Box>
        )}
        <Anchor />
      </Box>
    </Box>
  )
}
