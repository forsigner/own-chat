import React, { FC, useEffect, useState } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { Portal } from '@bone-ui/portal'
import { AnimatePresence } from 'framer-motion'
import { ModalProvider } from './modalContext'
import { ModalContext, ModalProps, ModalState } from './types'

export const Modal: FC<ModalProps> = forwardRef((props: ModalProps, ref) => {
  const {
    children,
    isLazy,
    isOpen: isOpenProp,
    closeOnOverlayClick = true,
    portal,
    onClose,
    onOpen,
    ...rest
  } = props

  const [state, setState] = useState({ isOpen: isOpenProp } as ModalState)

  const ctxValue: ModalContext = {
    state,
    closeOnOverlayClick,
    setState,
    open() {
      setState((prev) => ({
        ...prev,
        isOpen: true,
      }))
      onOpen?.()
    },
    close() {
      setState((prev) => ({
        ...prev,
        isOpen: false,
      }))
      onClose?.()
    },
  }

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      isOpen: isOpenProp!,
    }))
  }, [isOpenProp])

  return (
    <ModalProvider value={ctxValue}>
      <AnimatePresence>
        {state.isOpen && (
          <Portal>
            <Box ref={ref} black className="bone-modal" {...rest}>
              {children}
            </Box>
          </Portal>
        )}
      </AnimatePresence>
    </ModalProvider>
  )
})
