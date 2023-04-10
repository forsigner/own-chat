import React, { FC } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'
import { forwardRef } from '@bone-ui/utils'

export interface BreadcrumbSeparatorProps extends FowerHTMLProps<'span'> {}

export const BreadcrumbSeparator: FC<BreadcrumbSeparatorProps> = forwardRef((props, ref) => {
  const { children, ...rest } = props
  return (
    <>
      {children && (
        <Box ref={ref} className="bone-breadcrumb-separator" as="span" ml="0.5em" {...rest}>
          {children}
        </Box>
      )}
    </>
  )
})
