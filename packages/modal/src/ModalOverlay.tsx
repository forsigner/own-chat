import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { ModalOverlayProps } from './types'
import { styled } from '@fower/styled'
import { motion } from 'framer-motion'
import { fadeConfig } from '@bone-ui/motion-configs'
import { Z_INDEX } from './constants'

const AnimatedDiv = styled(motion.div)

export const ModalOverlay: FC<ModalOverlayProps> = forwardRef((props: ModalOverlayProps, ref) => {
  const { children, ...rest } = props

  return (
    <AnimatedDiv
      ref={ref}
      className="bone-modal-overlay"
      fixed
      w-100p
      h-100p
      top0
      left0
      bgBlack--T70
      bgBlack--T80--dark
      zIndex={Z_INDEX}
      {...(fadeConfig as any)}
      {...rest}
    />
  )
})
