import React, { FC, PropsWithChildren } from 'react'
import { Box } from '@fower/react'
import { forwardRef } from '@bone-ui/utils'

export const ModalBody: FC<PropsWithChildren> = forwardRef((props, ref) => {
  return <Box px6 py2 ref={ref} {...props} />
})
