import React, { ReactNode, useMemo, forwardRef } from 'react'
import { FloatingPortal, FloatingFocusManager } from '@floating-ui/react'
import { mergeRefs } from '@bone-ui/utils'
import { FowerHTMLProps } from '@fower/core'
import { Box } from '@fower/react'
import { usePopoverContext } from './context'
import { PopoverRenderProps } from './types'

export interface PopoverContentProps extends Omit<FowerHTMLProps<'div'>, 'children'> {
  /**
   * set width base trigger width
   * 是否跟随 trigger 元素宽度
   */
  useTriggerWidth?: boolean

  children: ((props: PopoverRenderProps) => ReactNode) | ReactNode
}

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  function PopoverContent(props, propRef) {
    const { children, useTriggerWidth, ...rest } = props
    const state = usePopoverContext()

    const ref = useMemo(() => mergeRefs([state.floating, propRef]), [state.floating, propRef])

    const { triggerWidth } = state

    const widthProps: any = {}
    if (triggerWidth && useTriggerWidth) {
      widthProps.w = triggerWidth + '!important'
    }

    const content = (
      <FloatingFocusManager context={state.context} modal={state.modal}>
        <Box
          ref={ref}
          black
          shadow
          shadow--dark="0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)"
          rounded
          outlineNone
          white--dark
          bgWhite
          bgGray800--dark
          zIndex={10000}
          style={{
            position: state.strategy,
            top: state.y ?? 0,
            left: state.x ?? 0,
            ...rest.style,
          }}
          aria-labelledby={state.labelId}
          aria-describedby={state.descriptionId}
          {...state.getFloatingProps(rest as any)}
          {...widthProps}
        >
          {typeof children === 'function' ? (children as any)(state.getRenderProps()) : children}
        </Box>
      </FloatingFocusManager>
    )

    if (state.portal) {
      return <FloatingPortal>{state.isOpen && content}</FloatingPortal>
    }

    return <>{state.isOpen && content}</>
  },
)
