import { SendMessageBox } from '../../../components/SendMessageBox'
import { useSendMessage } from '../hooks'

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
