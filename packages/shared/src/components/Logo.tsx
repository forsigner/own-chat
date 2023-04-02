import { Box } from '@fower/react'
import { IconLogo } from '../icons/IconLogo'
import { StyledLink } from './StyledLink'

interface Props {
  to?: string
  showText?: boolean
}

export const Logo = ({ showText = true, to }: Props) => {
  const content = (
    <>
      <IconLogo square8 white />
      {showText && (
        <Box>
          <Box textXL black fontBold>
            Own Chat
          </Box>
          <Box textXS gray600>
            Your personal Chat AI but collaborative
          </Box>
        </Box>
      )}
    </>
  )
  if (to) {
    return (
      <StyledLink href={to} toCenterY gray800--hover black spaceX1>
        {content}
      </StyledLink>
    )
  }
  return (
    <Box toCenterY gray800--hover black spaceX1>
      {content}
    </Box>
  )
}
