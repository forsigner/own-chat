import { Box } from '@fower/react'
import { ChatList } from './ChatList'
import { Anchor } from './Anchor'
import { useSessions } from '../../../hooks'

export const ChatBody = () => {
  const { loading } = useSessions()
  return (
    <Box flex-1 column overflowAuto px6 pt5 pb0>
      {!loading && <ChatList />}
      <Anchor />
    </Box>
  )
}
