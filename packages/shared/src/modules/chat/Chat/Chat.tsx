import { Box } from '@fower/react'
import { useProviders } from '../hooks/useProviders'
import { ChatBody } from './ChatBody'
import { ChatFooter } from './ChatFooter'
import { ChatHeader } from './ChatHeader'

export const Chat = () => {
  const { providers, loading } = useProviders()

  if (loading) return null

  console.log('providers:----', providers)
  return (
    <Box column h-100p>
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </Box>
  )
}
