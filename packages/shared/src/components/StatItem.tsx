import { Box } from '@fower/react'

type StatItemProps = {
  title: string
  value?: any
  color?: string
}

export const StatItem = ({ title, value, color = 'black' }: StatItemProps) => {
  return (
    <Box toLeft mb3 column>
      <Box flexShrink-0 gray500 textXS mb1>
        {title}
      </Box>
      <Box flexShrink-0 textLG color={color}>
        {value}
      </Box>
    </Box>
  )
}
