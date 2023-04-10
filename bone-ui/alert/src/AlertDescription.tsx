import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'

export interface AlertDescriptionProps extends FowerHTMLProps<'div'> {}

export const AlertDescription: FC<AlertDescriptionProps> = forwardRef((props, ref) => {
  return <Box className="bone-alert-description" leadingNormal ref={ref} {...props}></Box>
})
