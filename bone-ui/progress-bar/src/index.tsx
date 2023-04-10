import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { FowerHTMLProps, FowerColor } from '@fower/core'

export type ProgressBarSize = 'sm' | 'md' | 'lg' | number

const sizes: Record<ProgressBarSize, string> = { sm: '1em', md: '1.5em', lg: '2em' }

export interface ProgressBarProps extends FowerHTMLProps<'div'> {
  value?: number
  maxValue?: number
  size?: ProgressBarSize
  colorScheme?: FowerColor
  isPulse?: boolean
}

export const ProgressBar: FC<ProgressBarProps> = forwardRef((props: ProgressBarProps, ref) => {
  const {
    value = 0,
    maxValue = 100,
    size = 'md',
    colorScheme = 'brand500',
    isPulse = false,
    ...rest
  } = props
  const percent = value / maxValue
  return (
    <Box
      ref={ref}
      className="bone-progress-bar"
      bgGray100
      roundedMD
      w="100%"
      h={sizes[size] || size}
      {...rest}
    >
      <Box animatePulse={isPulse} w={percent} h="100%" bg={colorScheme} roundedLeft-6 />
    </Box>
  )
})
