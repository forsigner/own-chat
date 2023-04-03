import { Box } from '@fower/react'
import { Chat } from './Chat/Chat'
import { useSetting } from './hooks/useSetting'
import { TeamBar } from './TeamBar/TeamBar'
import { Sidebar } from './Sidebar/Sidebar'

export function ModuleChat() {
  const { loading, setting } = useSetting()
  if (loading) return null

  return (
    <>
      <TeamBar />
      <Sidebar />
      <Box flex-1 overflowAuto relative>
        <Chat />
      </Box>
    </>
  )
}
