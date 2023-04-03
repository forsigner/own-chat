import { Box } from '@fower/react'
import { Message } from '@own-chat/api-sdk'
import ChatItem from './ChatItem'

interface Props {
  messages: Message[]
}

export const ChatList = ({ messages }: Props) => {
  return (
    <Box column>
      {messages.map((item, index) => (
        <ChatItem key={index} message={item} />
      ))}
    </Box>
  )
}
