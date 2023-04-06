import { Box } from '@fower/react'
import { ChatList } from '../../../components/MessageList/MessageList'
import { Anchor } from './Anchor'
import { CHAT_WIDTH } from '../../../common'
import { useMessages } from '../hooks/useMessages'
import { ChatWelcome } from './ChatWelcome'
import { useSetting } from '../hooks/useSetting'

export const ChatBody = () => {
  const { setting } = useSetting()
  const { messages = [], loading } = useMessages()

  return (
    <Box flex-1 column overflowAuto px4 pt5 pb0>
      <Box maxW={CHAT_WIDTH} mx-auto w={['100p']}>
        {setting.activeSessionId && (
          <Box>
            {!loading && (
              <>
                {!!messages.length && <ChatList messages={messages} />}
                {!messages.length && <ChatWelcome />}
              </>
            )}
          </Box>
        )}
        {!setting.activeSessionId && (
          <Box>
            <ChatWelcome />
          </Box>
        )}
        <Anchor />
      </Box>
    </Box>
  )
}
