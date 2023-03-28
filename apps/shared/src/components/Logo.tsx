import React from 'react'
import { Box } from '@fower/react'
import { IconLogo } from '../icons/IconLogo'

interface Props {
  showText?: boolean
}

export const Logo = ({ showText = true }: Props) => {
  return (
    <Box toCenterY gray800--hover black spaceX1>
      <IconLogo square7 white />
      {showText && (
        <Box>
          <Box textXL black>
            One Chat
          </Box>
          <Box textXS gray600>
            My personal chatGPT
          </Box>
        </Box>
      )}
    </Box>
  )
}
