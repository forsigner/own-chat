import React, { FC, PropsWithChildren } from 'react'
import { FowerHTMLProps } from '@fower/core'
import { Box } from '@fower/react'
import { forwardRef } from '@bone-ui/utils'

export interface ModalHeaderProps extends FowerHTMLProps<'div'> {}

export const ModalHeader: FC<PropsWithChildren<ModalHeaderProps>> = forwardRef((props, ref) => {
  return <Box px6 py5 fontSemibold textLG ref={ref} {...props} />
})
