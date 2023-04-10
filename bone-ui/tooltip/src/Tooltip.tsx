import React, { ReactNode } from 'react'
import { TooltipOptions, useTooltip } from './useTooltip'
import { TooltipProvider } from './context'

export function Tooltip({
  children,
  modal = false,
  ...restOptions
}: {
  children: ReactNode
} & TooltipOptions) {
  const tooltip = useTooltip({ modal, ...restOptions })

  return <TooltipProvider value={tooltip}>{children}</TooltipProvider>
}
