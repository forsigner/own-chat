import { Box } from '@fower/react'
import { Message } from '@own-chat/api-sdk'
import MessageItem from './MessageItem'

interface Props {
  messages: Message[]
}

export const ChatList = ({ messages }: Props) => {
  return (
    <Box column rowGap-10>
      {messages.map((item, index) => (
        <MessageItem key={index} message={item} />
      ))}
    </Box>
  )
}
