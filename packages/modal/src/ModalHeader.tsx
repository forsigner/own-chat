import React, { FC, PropsWithChildren } from 'react'
import { Box } from '@fower/react'
import { forwardRef } from '@bone-ui/utils'

export const ModalHeader: FC<PropsWithChildren> = forwardRef((props, ref) => {
  return <Box px6 py5 fontSemibold textLG ref={ref} {...props} />
})
