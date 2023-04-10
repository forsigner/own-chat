import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'

export interface SkeletonCircleProps extends FowerHTMLProps<'div'> {
  size?: number
}

export const SkeletonCircle: FC<SkeletonCircleProps> = forwardRef(
  (props: SkeletonCircleProps, ref) => {
    return (
      <Box
        className={`bone-skeleton-circle`}
        ref={ref}
        bgGray200
        animatePulse
        roundedFull
        square={props.size || 24}
        {...props}
      ></Box>
    )
  },
)
