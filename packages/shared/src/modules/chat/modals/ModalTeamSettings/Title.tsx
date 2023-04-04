import { FC } from 'react'
import { FowerHTMLProps } from '@fower/core'
import { Box } from '@fower/react'
import { IconProps } from '@bone-ui/iconify'

interface Props extends FowerHTMLProps<'div'> {
  icon?: FC<IconProps>
  text: string
  subtitle?: string
}

export const Title = ({ text, subtitle, icon: Icon, ...rest }: Props) => {
  return (
    <Box spaceY2 {...rest}>
      <Box toCenterY mb3 spaceX2 textXL fontSemibold>
        {Icon && <Icon square4 />}
        <Box>{text}</Box>
      </Box>
      <Box>{subtitle}</Box>
    </Box>
  )
}
