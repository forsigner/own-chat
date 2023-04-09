import React, { FC, useContext } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { modalContext } from './modalContext'
import { CloseButton } from '@bone-ui/close-button'

export const ModalCloseButton: FC = forwardRef((props, ref) => {
  const ctx = useContext(modalContext)
  const { close } = ctx

  return <CloseButton ref={ref} onClick={close} absolute top-8 right-8 {...props} />
})
