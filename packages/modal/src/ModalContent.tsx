import React, { FC, useContext } from 'react'
import { Box } from '@fower/react'
import { forwardRef } from '@bone-ui/utils'
import { ModalContentProps } from './types'
import { modalContext } from './modalContext'
import { styled } from '@fower/styled'
import { motion } from 'framer-motion'
import { fadeConfig } from '@bone-ui/motion-configs'
import { RemoveScroll } from 'react-remove-scroll'
import { Z_INDEX } from './constants'

const AnimatedDiv = styled(motion.div)

export const ModalContent: FC<ModalContentProps> = forwardRef((props: ModalContentProps, ref) => {
  const { children, ...rest } = props
  const ctx = useContext(modalContext)
  const { close, closeOnOverlayClick } = ctx

  return (
    <Box
      ref={ref}
      onClick={() => {
        if (closeOnOverlayClick) close()
      }}
      fixed
      w-100p
      h-100p
      top0
      left0
      zIndex={Z_INDEX + 1}
    >
      <Box w-100p h-100p toCenter bgTransparent>
        <RemoveScroll>
          <AnimatedDiv
            onClick={(e) => {
              e.stopPropagation()
            }}
            className="bone-modal-content"
            roundedLG
            black
            shadow
            relative
            maxH-80vh
            overflowYAuto
            bgWhite
            bgGray800--dark
            gray100--dark
            w={['92vw', 460]}
            shadow--dark="0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)"
            // style={{ transformOrigin: 'center center' }}
            // {...scaleConfig}
            {...fadeConfig}
            {...(rest as any)}
          >
            {children}
          </AnimatedDiv>
        </RemoveScroll>
      </Box>
    </Box>
  )
})
