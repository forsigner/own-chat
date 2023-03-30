import { Box } from '@fower/react'
import { Chat } from './Chat/Chat'
import { ProviderBar } from './ProviderBar/ProviderBar'
import { Sidebar } from './Sidebar/Sidebar'

export function ModuleChat() {
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
