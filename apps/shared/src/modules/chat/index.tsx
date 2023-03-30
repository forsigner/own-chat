import { Box } from '@fower/react'
import { Chat } from './Chat/Chat'
import { Sidebar } from './Sidebar/Sidebar'

export function ModuleChat() {
  return (
    <>
      <Sidebar />
      <Box flex-1 overflowAuto relative>
        <Chat />
      </Box>
    </>
  )
}
