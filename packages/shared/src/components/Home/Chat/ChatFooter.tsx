import { useSendMessage } from '../../../hooks'
import { SendMessageBox } from '../../SendMessageBox'

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
