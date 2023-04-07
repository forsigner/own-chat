import { Chat } from './Chat/Chat'
import { Sidebar } from './Sidebar/Sidebar'
import { TeamBar } from './TeamBar/TeamBar'
import { useChatSettings } from './hooks/useChatSettings'
import { useVisit } from './hooks/useVisit'
import { Box } from '@fower/react'

export function ModuleChat() {
  const { loading, visit } = useVisit()
  const { loading: loadingChatSettings } = useChatSettings()
  if (loading || loadingChatSettings) return null

  return (
    <>
      <TeamBar />
      <Sidebar />
      <Box flex-1>
        <Chat />
      </Box>
    </>
  )
}
