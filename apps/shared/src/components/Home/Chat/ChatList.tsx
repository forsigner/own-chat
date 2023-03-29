import { Box } from '@fower/react'
import { useMessages } from '../../../hooks'
import ChatItem from './ChatItem'

export const ChatList = () => {
  const { messages = [] } = useMessages()

  return (
    <Box column>
      {messages.map((item, index) => (
        <ChatItem key={index} message={item} />
      ))}
    </Box>
  )
}
