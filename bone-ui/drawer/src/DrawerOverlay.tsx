import React, { useContext, FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { DrawerOverlayProps } from './types'
import { drawerContext } from './drawerContext'
import { styled } from '@fower/styled'
import { motion } from 'framer-motion'
import { fadeConfig } from '@bone-ui/motion-configs'

const AnimatedDiv = styled(motion.div)

export const DrawerOverlay: FC<DrawerOverlayProps> = forwardRef(
  (props: DrawerOverlayProps, ref) => {
    const { children, ...rest } = props
    const ctx = useContext(drawerContext)
    const { close } = ctx
    return (
      <AnimatedDiv
        ref={ref}
        onClick={() => {
          close()
        }}
        className="bone-drawer-overlay"
        fixed
        w-100p
        h-100p
        top0
        left0
        bgBlack--T70
        bgBlack--T80--dark
        zIndex-1000
        {...(fadeConfig as any)}
        {...rest}
      />
    )
  },
)
