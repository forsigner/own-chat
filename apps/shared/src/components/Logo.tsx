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
          <Box textXL black fontBold>
            Owned.Chat
          </Box>
          <Box textXS gray600>
            Own a personal chatGPT
          </Box>
        </Box>
      )}
    </Box>
  )
}
