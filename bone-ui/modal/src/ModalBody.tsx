import { FowerHTMLProps } from '@fower/core'
import React, { FC, PropsWithChildren } from 'react'
import { Box } from '@fower/react'
import { forwardRef } from '@bone-ui/utils'

export interface ModalBodyProps extends FowerHTMLProps<'div'> {}

export const ModalBody: FC<PropsWithChildren<ModalBodyProps>> = forwardRef((props, ref) => {
  return <Box px6 py2 ref={ref} {...props} />
})
