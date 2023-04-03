import { useSendMessage } from '../hooks/useSendMessage'
import { SendMessageBox } from '../../../components/SendMessageBox'

export const ChatFooter = () => {
  const { sendMessage } = useSendMessage()

  return (
    <SendMessageBox
      onSendMessage={async (value) => {
        sendMessage(value)
      }}
    />
  )
}
