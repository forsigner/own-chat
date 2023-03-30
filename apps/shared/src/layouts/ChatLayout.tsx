import { Box } from '@fower/react'
import { FC, PropsWithChildren } from 'react'

export const ChatLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box black h-100vh bgWhite bgSlate800--dark toCenter bgSlate100>
      <Box container h={['100vh', '85vh']} mx-auto shadowXL rounded3XL toLeft bgWhite>
        {children}
      </Box>
    </Box>
  )
}
