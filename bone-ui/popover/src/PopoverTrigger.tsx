import React, {
  ReactNode,
  useMemo,
  cloneElement,
  isValidElement,
  forwardRef,
  useCallback,
} from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'
import { isBrowser } from '@fower/utils'
import { mergeRefs } from '@bone-ui/utils'
import { usePopoverContext } from './context'
import { PopoverRenderProps } from './types'

interface PopoverTriggerProps extends Omit<FowerHTMLProps<'div'>, 'children'> {
  children: ((props: PopoverRenderProps) => ReactNode) | ReactNode
  asChild?: boolean
}

export const PopoverTrigger = forwardRef<HTMLElement, PopoverTriggerProps>(function PopoverTrigger(
  { children, asChild = true, ...rest },
  propRef,
) {
  const state = usePopoverContext()
  const childrenRef = (children as any).ref

  const { setTriggerWidth } = state

  const elementRef = useCallback(
    (element: HTMLElement) => {
      if (isBrowser && element) {
        const { width } = window.getComputedStyle(element)
        setTriggerWidth(width)
      }
    },
    [setTriggerWidth],
  )

  const ref = useMemo(
    () => mergeRefs([state.reference, propRef, childrenRef, elementRef]),
    [state.reference, propRef, childrenRef, elementRef],
  )

  const childrenElement =
    typeof children === 'function' ? (children as any)(state.getRenderProps()) : children

  let trigger = (
    <Box
      ref={ref}
      className="bone-popover-trigger"
      cursorNotAllowed={!!state.isDisabled}
      inlineFlex
      data-state={state.isOpen ? 'opened' : 'closed'}
      {...state.getReferenceProps(rest as any)}
      {...rest}
    >
      {childrenElement}
    </Box>
  )

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && isValidElement(childrenElement)) {
    trigger = cloneElement(
      childrenElement,
      state.getReferenceProps({
        ref,
        ...(childrenElement.props as any),
        'data-state': state.isOpen ? 'opened' : 'closed',
      } as any),
    )
  }

  return trigger
})
