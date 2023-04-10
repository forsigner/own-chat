import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'

export interface CardProps extends FowerHTMLProps<'div'> {}

export const Card: FC<CardProps> = forwardRef((props: CardProps, ref) => {
  return (
    <Box
      className="bone-card"
      ref={ref}
      p4
      bgWhite
      rounded
      minW-256
      overflowHidden
      border
      borderGray200
      css={{ transition: 'box-shadow 0.3s ease' }}
      {...props}
    />
  )
})
