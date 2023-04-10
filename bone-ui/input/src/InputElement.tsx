import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'
import { AtomicProps } from '@fower/atomic-props'
import { Placement, useInputGroupContext } from './context'
import { Id } from './types'

export interface InputElementProps extends FowerHTMLProps<'div'> {
  placementMap?: 'left' | 'right'
}

export const InputElement: FC<InputElementProps> = forwardRef((props: InputElementProps, ref) => {
  let attrs: AtomicProps = {}
  const ctx = useInputGroupContext()
  if (ctx.placementMap) {
    const { size, placementMap } = ctx
    const { placement } = placementMap.get(props)!

    attrs.square = size

    if (placement === Placement.start) {
      attrs.left = 0
    }

    if (placement === Placement.end) {
      attrs.right = 0
    }
  }
  return (
    <Box
      className="bone-input-element"
      ref={ref}
      absolute
      top0
      toCenter
      zIndex-2
      {...(attrs as any)}
      {...props}
    />
  )
})
;(InputElement as any).id = Id.InputElement
