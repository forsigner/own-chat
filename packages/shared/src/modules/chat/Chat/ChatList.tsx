import { Box } from '@fower/react'
import { useMessages } from '../hooks/useMessages'
import ChatItem from './ChatItem'

export const ChatList = () => {
  const { messages = [], loading } = useMessages()
  if (loading) return null

  return (
    <Box column>
      {messages.map((item, index) => (
        <ChatItem key={index} message={item} />
      ))}
    </Box>
  )
}
