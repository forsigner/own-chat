import React, { FC, ReactNode } from 'react'
import { Box } from '@fower/react'
import { FowerColor, FowerHTMLProps } from '@fower/core'
import { forwardRef } from '@bone-ui/utils'

export type Size = 'sm' | 'md' | 'lg' | number

const sizes: Record<Size, number> = { sm: 60, md: 90, lg: 120 }

export interface CircularProgressProps extends FowerHTMLProps<'div'> {
  value?: number
  maxValue?: number
  strokeWidth?: number
  size?: Size
  colorScheme?: FowerColor
  strokeColor?: string
  label?: ReactNode
}

export const CircularProgress: FC<CircularProgressProps> = forwardRef(
  (props: CircularProgressProps, ref) => {
    const {
      value = 0,
      maxValue = 100,
      size: _size = 'md',
      colorScheme = 'brand500',
      strokeWidth = 6,
      strokeColor = '#e5e5e5',
      label,
      ...rest
    } = props

    const size = (sizes[_size] || _size) as number

    const percent = value / maxValue

    const sharedCircleProps = {
      cx: size / 2,
      cy: size / 2,
      r: size / 2 - strokeWidth / 2,
      fill: 'none',
      strokeWidth,
    }

    return (
      <Box ref={ref} className="bone-circular-progress" inlineBlock relative {...rest}>
        <Box
          as="svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          block
          viewBox={`0 0 ${size} ${size}`}
          square={size}
          color={colorScheme}
          css={{
            transform: 'rotate(-90deg)',
          }}
        >
          <circle {...sharedCircleProps} stroke={strokeColor} />
          <circle
            {...sharedCircleProps}
            stroke="currentColor"
            pathLength="100"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: `${(1 - percent) * 100}`,
              strokeLinecap: 'round',
            }}
          />
        </Box>
        <Box absolute left="50%" top="50%" css={{ transform: 'translate(-50%, -50%)' }}>
          {label}
        </Box>
      </Box>
    )
  },
)
