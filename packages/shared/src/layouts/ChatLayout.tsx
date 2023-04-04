import { Box } from '@fower/react'
import { FC, PropsWithChildren } from 'react'

export const ChatLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box black h-100vh bgWhite bgSlate800--dark toCenter bgSlate100>
      <Box w-100p h={['100vh']} mx-auto toLeft bgWhite>
        {children}
      </Box>
    </Box>
  )
}
