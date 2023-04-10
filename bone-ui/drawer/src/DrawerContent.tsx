import React, { FC, useContext } from 'react'
import { Box } from '@fower/react'
import { forwardRef } from '@bone-ui/utils'
import { DrawerContentProps } from './types'
import { drawerContext } from './drawerContext'
import { styled } from '@fower/styled'
import { motion } from 'framer-motion'
import { fadeConfig } from '@bone-ui/motion-configs'
import { CloseButton } from '@bone-ui/close-button'
import { RemoveScroll } from 'react-remove-scroll'

const AnimatedDiv = styled(motion.div)

export const DrawerContent: FC<DrawerContentProps> = forwardRef(
  (props: DrawerContentProps, ref) => {
    const { children, ...rest } = props
    const ctx = useContext(drawerContext)
    const { close } = ctx

    return (
      <Box
        ref={ref}
        onClick={() => {
          close()
        }}
        fixed
        w-100p
        h-100p
        top0
        left0
        zIndex-1001
      >
        <Box w-100p h-100p bgBlue100 toRight bgTransparent>
          <RemoveScroll>
            <AnimatedDiv
              onClick={(e) => {
                e.stopPropagation()
              }}
              className="bone-modal-content"
              shadow
              relative
              w-720
              h-100p
              overflowYAuto
              bgWhite
              bgGray800--dark
              // style={{ transformOrigin: 'center center' }}
              // {...scaleConfig}
              {...fadeConfig}
              {...(rest as any)}
            >
              <CloseButton onClick={close} absolute top-8 right-8 zIndex-1 />
              {children}
            </AnimatedDiv>
          </RemoveScroll>
        </Box>
      </Box>
    )
  },
)
