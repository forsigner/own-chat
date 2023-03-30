import { Box } from '@fower/react'
import { Chat } from './Chat/Chat'
import { useSetting } from './hooks/useSetting'
import { ProviderBar } from './ProviderBar/ProviderBar'
import { Sidebar } from './Sidebar/Sidebar'

export function ModuleChat() {
  const { loading, setting } = useSetting()
  if (loading) return null

  return (
    <>
      <ProviderBar />
      <Sidebar />
      <Box flex-1 overflowAuto relative>
        <Chat />
      </Box>
    </>
  )
}
