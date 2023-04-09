import { useSendMessage } from '../hooks/useSendMessage'
import { SendMessageBox } from '../../../components/SendMessageBox'
import { Box } from '@fower/react'
import { ChatController } from './ChatController'

export const ChatFooter = () => {
  const { sendMessage } = useSendMessage()

  return (
    <Box>
      <ChatController />
      <SendMessageBox
        onSendMessage={async (value) => {
          sendMessage(value)
        }}
      />
    </Box>
  )
}
