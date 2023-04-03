import { Box } from '@fower/react'
import { Sidebar } from './Sidebar/Sidebar'
import { FC, PropsWithChildren } from 'react'
import { Chat } from './Chat/Chat'

export const ProviderChat: FC<PropsWithChildren> = () => {
  return (
    <>
      <Sidebar />
      <Box flex-1>
        <Chat />
      </Box>
    </>
  )
}
