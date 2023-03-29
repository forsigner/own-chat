import { Box } from '@fower/react'
import { Sidebar } from './Home/Sidebar/Sidebar'
import { FC, PropsWithChildren } from 'react'
import { Chat } from './Home/Chat/Chat'

export const Home: FC<PropsWithChildren> = () => {
  return (
    <Box black h-100vh bgWhite bgSlate800--dark toCenter bgSlate100>
      <Box container h={['100vh', '85vh']} mx-auto shadowXL rounded3XL toLeft bgWhite>
        <Sidebar />
        <Box flex-1 overflowAuto relative>
          <Chat />
        </Box>
      </Box>
    </Box>
  )
}
