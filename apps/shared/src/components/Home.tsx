import { Box } from '@fower/react'
import { Sidebar } from './Home/Sidebar/Sidebar'
import { FC, PropsWithChildren } from 'react'
import { Chat } from './Home/Chat/Chat'

export const Home: FC<PropsWithChildren> = () => {
  return (
    <Box black h-100vh bgWhite bgSlate800--dark toCenter>
      <Box
        container
        h={['100vh', '85vh']}
        mx-auto
        shadowXL
        border-1
        borderGray100
        rounded3XL
        toLeft
      >
        <Sidebar />
        <Box flex-1 overflowAuto relative>
          <Chat />
        </Box>
      </Box>
    </Box>
  )
}
