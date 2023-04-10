import React, { ReactNode, useMemo } from 'react'
import { PopoverOptions, usePopover } from './usePopover'
import { PopoverProvider } from './context'

interface PopoverRenderProps {
  isOpen: boolean
  open(): void
  close(): void
}

export function Popover({
  children,
  modal = false,
  ...restOptions
}: {
  children: ((renderProps: PopoverRenderProps) => ReactNode) | ReactNode
} & PopoverOptions) {
  const popover = usePopover({ modal, ...restOptions })

  const renderProps = useMemo(() => {
    return {
      isOpen: popover.isOpen,
      close: popover.close,
      open: popover.open,
    }
  }, [popover])

  const value = useMemo(() => {
    return {
      ...popover,
      getRenderProps() {
        return renderProps
      },
    }
  }, [popover, renderProps])

  return (
    <PopoverProvider value={value}>
      {typeof children === 'function' ? children(renderProps) : children}
    </PopoverProvider>
  )
}
