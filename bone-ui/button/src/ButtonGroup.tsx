import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'

export interface ButtonGroupProps extends FowerHTMLProps<'div'> {}

export const ButtonGroup: FC<ButtonGroupProps> = forwardRef((props, ref) => {
  return (
    <Box
      {...props}
      ref={ref}
      css={{
        '> .bone-button:not(:first-child)': {
          marginLeft: '-1px',
        },
        '> .bone-button:first-child': {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        },
        '> .bone-button:not(:first-child):not(:last-child)': {
          borderRadius: 0,
        },
        '> .bone-button:last-child': {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
      }}
    />
  )
})
