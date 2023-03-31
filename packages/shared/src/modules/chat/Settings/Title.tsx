import { Box } from '@fower/react'
import { PropsWithChildren } from 'react'

export const Title = ({ children }: PropsWithChildren) => {
  return (
    <Box fontMedium textBase pb3 pt3>
      {children}
    </Box>
  )
}
