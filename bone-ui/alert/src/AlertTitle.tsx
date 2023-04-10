import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'

export interface AlertTitleProps extends FowerHTMLProps<'div'> {}

export const AlertTitle: FC<AlertTitleProps> = forwardRef((props, ref) => {
  return <Box className="bone-alert-title" ref={ref} fontBold leadingNormal {...props}></Box>
})
