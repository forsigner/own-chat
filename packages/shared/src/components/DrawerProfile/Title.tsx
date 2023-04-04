import { FC } from 'react'
import { Box } from '@fower/react'
import { IconProps } from '@bone-ui/iconify'

type Props = {
  icon?: FC<IconProps>
  text: string
}

export const Title = ({ text, icon: Icon }: Props) => {
  return (
    <Box toCenterY gray400 mt8 mb3 spaceX2>
      {Icon && <Icon square4 />}
      <Box>{text}</Box>
    </Box>
  )
}
