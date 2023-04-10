import React, { ReactNode, useMemo, forwardRef } from 'react'
import {
  FloatingPortal,
  useDelayGroupContext,
  useDelayGroup,
  useId,
  useTransitionStyles,
  FloatingArrow,
} from '@floating-ui/react'
import { mergeRefs } from '@bone-ui/utils'
import { FowerHTMLProps } from '@fower/core'
import { Box } from '@fower/react'
import { useTooltipContext } from './context'

export interface TooltipContentProps extends Omit<FowerHTMLProps<'div'>, 'children'> {
  children: ReactNode
}

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  function PopoverContent(props, propRef) {
    const { children, ...rest } = props
    const state = useTooltipContext()
    const id = useId()

    const ref = useMemo(() => mergeRefs([state.floating, propRef]), [state.floating, propRef])

    const { isInstantPhase, currentId } = useDelayGroupContext()

    useDelayGroup(state.context, { id })
    const instantDuration = 0
    const duration = 250

    const { isMounted, styles } = useTransitionStyles(state.context, {
      duration: isInstantPhase
        ? {
            open: instantDuration,
            // `id` is this component's `id`
            // `currentId` is the current group's `id`
            close: currentId === id ? duration : instantDuration,
          }
        : duration,
      initial: {
        opacity: 0,
      },
    })

    return (
      <FloatingPortal>
        {isMounted && (
          <Box
            ref={ref}
            outlineNone
            gray100
            bgBlack
            shadowSM
            leadingNormal
            roundedLG
            maxW-400
            px3
            py2
            zIndex-10000
            textSM
            bgBlack--dark--i
            gray100--dark
            zIndex={10000}
            style={{
              position: state.strategy,
              top: state.y ?? 0,
              left: state.x ?? 0,
              ...rest.style,
              visibility: state.x == null ? 'hidden' : 'visible',
              ...props.style,
              ...styles,
            }}
            aria-labelledby={state.labelId}
            aria-describedby={state.descriptionId}
            {...state.getFloatingProps()}
            {...rest}
          >
            <FloatingArrow ref={state.arrowRef} context={state.context} />

            {children}
          </Box>
        )}
      </FloatingPortal>
    )
  },
)
