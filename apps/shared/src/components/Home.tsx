import { Box } from '@fower/react'
import { Sidebar } from './Home/Sidebar/Sidebar'
import { FC, PropsWithChildren } from 'react'
import { Chat } from './Home/Chat/Chat'

export const Home: FC<PropsWithChildren> = () => {
  return (
    <>
      <Sidebar />
      <Box flex-1 overflowAuto relative>
        <Chat />
      </Box>
    </>
  )
}
